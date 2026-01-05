import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AiChatService, ChatMessage, ChatSession, AIInvoice } from '../services/ai-chat.service';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.page.html',
  styleUrls: ['./ai-assistant.page.scss'],

})
export class AiAssistantPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  // User info
  USER_INFO: any;
  STORE_INFO: any;
  year: any;

  // Chat state
  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isLoading: boolean = false;
  streamingMessage: string = '';
  isStreaming: boolean = false;

  // Session management
  sessions: ChatSession[] = [];
  currentSession: ChatSession | null = null;
  currentSessionId: string = '';
  showSessionSidebar: boolean = false;

  // PDF Upload
  selectedFile: File | null = null;
  uploadProgress: number = 0;
  isUploading: boolean = false;
  isExtracting: boolean = false;

  // AI Invoices
  aiInvoices: AIInvoice[] = [];
  showInvoicesList: boolean = false;

  // View mode
  viewMode: 'chat' | 'invoices' = 'chat';

  // Subscriptions
  private subscriptions: Subscription[] = [];

  constructor(
    private aiChatService: AiChatService,
    private storage: Storage,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    await this.storage.create();
    await this.loadUserInfo();
    await this.loadSessions();
    await this.createOrLoadSession();
  }

  ngOnDestroy() {
    // Cleanup subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Load user information from storage
   */
  async loadUserInfo() {
    this.USER_INFO = await this.storage.get('USER_INFO');
    this.STORE_INFO = await this.storage.get('STORE_INFO');
    this.year = await this.storage.get('year');

    if (!this.USER_INFO || !this.STORE_INFO) {
      this.presentToast('User not logged in', 'danger');
    }
  }

  /**
   * Load chat sessions
   */
  async loadSessions() {
    if (!this.USER_INFO || !this.STORE_INFO) return;

    const sub = this.aiChatService.getChatSessions(
      this.STORE_INFO.id,
      this.USER_INFO.id
    ).subscribe(
      (response) => {
        if (response.success) {
          this.sessions = response.data;
        }
      },
      (error) => {
        console.error('Error loading sessions:', error);
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Create or load session
   */
  async createOrLoadSession() {
    // Check if there's an active session
    if (this.sessions.length > 0) {
      this.currentSession = this.sessions[0];
      this.currentSessionId = this.currentSession.session_id;
      await this.loadChatHistory();
    } else {
      await this.createNewSession();
    }
  }

  /**
   * Create new chat session
   */
  async createNewSession(title: string = 'New Conversation') {
    if (!this.USER_INFO || !this.STORE_INFO || !this.year) return;

    const sub = this.aiChatService.createSession(
      this.STORE_INFO.id,
      this.USER_INFO.id,
      this.year.id,
      title
    ).subscribe(
      (response) => {
        if (response.success) {
          this.currentSessionId = response.data.session_id;
          this.messages = [];
          this.loadSessions(); // Reload sessions list
          this.presentToast('New conversation started', 'success');
        }
      },
      (error) => {
        console.error('Error creating session:', error);
        this.presentToast('Failed to create session', 'danger');
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Load chat history for current session
   */
  async loadChatHistory() {
    if (!this.currentSessionId) return;

    const sub = this.aiChatService.getChatHistory(this.currentSessionId).subscribe(
      (response) => {
        if (response.success) {
          this.messages = response.data.map((msg: any) => ({
            role: msg.message_role,
            content: msg.message_content,
            timestamp: new Date(msg.created_at),
            tokens_used: msg.tokens_used
          }));
          this.scrollToBottom();
        }
      },
      (error) => {
        console.error('Error loading chat history:', error);
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Switch to a different session
   */
  switchSession(session: ChatSession) {
    this.currentSession = session;
    this.currentSessionId = session.session_id;
    this.messages = [];
    this.loadChatHistory();
    this.showSessionSidebar = false;
  }

  /**
   * Send message to AI
   */
  async sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading || this.isStreaming) return;

    const userMessage = this.currentMessage.trim();
    this.currentMessage = '';

    // Add user message to display
    this.messages.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    });

    this.scrollToBottom();

    // Start streaming
    this.isStreaming = true;
    this.streamingMessage = '';

    // Add placeholder for assistant message
    const assistantMessageIndex = this.messages.length;
    this.messages.push({
      role: 'assistant',
      content: '',
      timestamp: new Date()
    });

    const sub = this.aiChatService.chatStream(
      this.currentSessionId,
      userMessage,
      this.STORE_INFO.id,
      this.USER_INFO.id,
      this.year.id,
      this.USER_INFO.user_name || 'User'
    ).subscribe(
      (data) => {
        if (data.type === 'chunk') {
          // Update streaming message
          this.streamingMessage += data.content;
          this.messages[assistantMessageIndex].content = this.streamingMessage;
          this.scrollToBottom();
        } else if (data.type === 'done') {
          // Streaming complete
          this.messages[assistantMessageIndex].content = data.full_response;
          this.streamingMessage = '';
          this.isStreaming = false;
          this.scrollToBottom();
        } else if (data.type === 'error') {
          // Handle error
          this.messages[assistantMessageIndex].content = 'Error: ' + data.message;
          this.isStreaming = false;
          this.presentToast('Chat error: ' + data.message, 'danger');
        }
      },
      (error) => {
        console.error('Chat error:', error);
        this.messages[assistantMessageIndex].content = 'Connection error. Please try again.';
        this.isStreaming = false;
        this.presentToast('Connection error', 'danger');
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Trigger file input click
   */
  triggerFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  /**
   * Handle file selection
   */
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file
    const validation = this.aiChatService.validatePDF(file);
    if (!validation.valid) {
      this.presentToast(validation.error!, 'danger');
      return;
    }

    this.selectedFile = file;
    this.uploadPDF();
  }

  /**
   * Upload PDF file
   */
  async uploadPDF() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    const loading = await this.loadingController.create({
      message: 'Uploading PDF...'
    });
    await loading.present();

    const sub = this.aiChatService.uploadPDF(
      this.selectedFile,
      this.STORE_INFO.id,
      this.USER_INFO.id,
      this.year.id,
      'other'
    ).subscribe(
      async (response) => {
        await loading.dismiss();
        this.isUploading = false;

        if (response.success) {
          this.presentToast('PDF uploaded successfully', 'success');
          const ai_invoice_id = response.data.ai_invoice_id;

          // Automatically extract data
          await this.extractPDFData(ai_invoice_id);
        } else {
          this.presentToast('Upload failed: ' + response.message, 'danger');
        }

        this.selectedFile = null;
      },
      async (error) => {
        await loading.dismiss();
        this.isUploading = false;
        this.selectedFile = null;
        console.error('Upload error:', error);
        this.presentToast('Upload failed', 'danger');
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Extract data from PDF
   */
  async extractPDFData(ai_invoice_id: number) {
    this.isExtracting = true;
    const loading = await this.loadingController.create({
      message: 'Extracting invoice data with AI...'
    });
    await loading.present();

    const sub = this.aiChatService.extractPDF(ai_invoice_id).subscribe(
      async (response) => {
        await loading.dismiss();
        this.isExtracting = false;

        if (response.success) {
          const confidence = response.data.confidence_score;
          this.presentToast(
            `Extraction completed (${confidence}% confidence)`,
            'success'
          );

          // Add extraction result as a message
          const extractedData = response.data.extracted_data;
          this.messages.push({
            role: 'assistant',
            content: this.formatExtractionResult(extractedData),
            timestamp: new Date()
          });

          this.scrollToBottom();
          this.loadAIInvoices(); // Refresh invoices list
        } else {
          this.presentToast('Extraction failed: ' + response.message, 'danger');
        }
      },
      async (error) => {
        await loading.dismiss();
        this.isExtracting = false;
        console.error('Extraction error:', error);
        this.presentToast('Extraction failed', 'danger');
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Format extraction result for display
   */
  formatExtractionResult(data: any): string {
    let result = '📄 **Invoice Extracted Successfully**\n\n';

    if (data.invoice_number) {
      result += `**Invoice #:** ${data.invoice_number}\n`;
    }

    if (data.invoice_date) {
      result += `**Date:** ${data.invoice_date}\n`;
    }

    if (data.customer_supplier && data.customer_supplier.name) {
      result += `**Customer/Supplier:** ${data.customer_supplier.name}\n`;
    }

    if (data.total) {
      result += `**Total:** ${data.total}\n`;
    }

    if (data.items && data.items.length > 0) {
      result += `\n**Items (${data.items.length}):**\n`;
      data.items.forEach((item: any, index: number) => {
        result += `${index + 1}. ${item.item_name} - Qty: ${item.quantity} - ${item.total}\n`;
      });
    }

    return result;
  }

  /**
   * Load AI invoices
   */
  async loadAIInvoices() {
    if (!this.STORE_INFO || !this.year) return;

    const sub = this.aiChatService.getAIInvoices(
      this.STORE_INFO.id,
      this.year.id
    ).subscribe(
      (response) => {
        if (response.success) {
          this.aiInvoices = response.data;
        }
      },
      (error) => {
        console.error('Error loading AI invoices:', error);
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Toggle session sidebar
   */
  toggleSessionSidebar() {
    this.showSessionSidebar = !this.showSessionSidebar;
  }

  /**
   * Toggle invoices list
   */
  toggleInvoicesList() {
    if (!this.aiInvoices.length) {
      this.loadAIInvoices();
    }
    this.showInvoicesList = !this.showInvoicesList;
  }

  /**
   * Switch view mode
   */
  switchView(mode: 'chat' | 'invoices') {
    this.viewMode = mode;
    if (mode === 'invoices' && !this.aiInvoices.length) {
      this.loadAIInvoices();
    }
  }

  /**
   * Scroll to bottom of chat
   */
  scrollToBottom() {
    setTimeout(() => {
      if (this.content) {
        this.content.scrollToBottom(300);
      }
    }, 100);
  }

  /**
   * Present toast message
   */
  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'top'
    });
    await toast.present();
  }

  /**
   * Get status color
   */
  getStatusColor(status: string): string {
    return this.aiChatService.getStatusColor(status);
  }

  /**
   * Get status icon
   */
  getStatusIcon(status: string): string {
    return this.aiChatService.getStatusIcon(status);
  }

  /**
   * Format file size
   */
  formatFileSize(bytes: number): string {
    return this.aiChatService.formatFileSize(bytes);
  }

  /**
   * Format confidence
   */
  formatConfidence(score: number): string {
    return this.aiChatService.formatConfidence(score);
  }

  /**
   * Get confidence color
   */
  getConfidenceColor(score: number): string {
    return this.aiChatService.getConfidenceColor(score);
  }
}
