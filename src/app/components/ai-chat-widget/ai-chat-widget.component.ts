import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { AiChatService, ChatMessage } from '../../services/ai-chat.service';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ai-chat-widget',
  templateUrl: './ai-chat-widget.component.html',
  styleUrls: ['./ai-chat-widget.component.scss'],
})
export class AiChatWidgetComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  // Widget state
  isExpanded: boolean = false;
  isMinimized: boolean = true;

  // User info
  USER_INFO: any;
  STORE_INFO: any;
  year: any;

  // Chat state
  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isStreaming: boolean = false;
  streamingMessage: string = '';

  // Session
  currentSessionId: string = '';

  // Subscriptions
  private subscriptions: Subscription[] = [];

  constructor(
    private aiChatService: AiChatService,
    private storage: Storage,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();
    await this.loadUserInfo();
    await this.initializeSession();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Load user information
   */
  async loadUserInfo() {
    this.USER_INFO = await this.storage.get('USER_INFO');
    this.STORE_INFO = await this.storage.get('STORE_INFO');
    this.year = await this.storage.get('year');
  }

  /**
   * Initialize chat session
   */
  async initializeSession() {
    if (!this.USER_INFO || !this.STORE_INFO || !this.year) return;

    const sub = this.aiChatService.createSession(
      this.STORE_INFO.id,
      this.USER_INFO.id,
      this.year.id,
      'Quick Chat'
    ).subscribe(
      (response) => {
        if (response.success) {
          this.currentSessionId = response.data.session_id;
        }
      },
      (error) => {
        console.error('Error creating session:', error);
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Toggle widget expanded/minimized
   */
  toggleWidget() {
    this.isExpanded = !this.isExpanded;
    this.isMinimized = !this.isMinimized;

    if (this.isExpanded) {
      // Scroll to bottom when opening
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  /**
   * Close widget
   */
  closeWidget() {
    this.isExpanded = false;
    this.isMinimized = true;
  }

  /**
   * Open full AI assistant page
   */
  openFullPage() {
    this.closeWidget();
    this.router.navigate(['/folder/ai-assistant']);
  }

  /**
   * Send message
   */
  async sendMessage() {
    if (!this.currentMessage.trim() || this.isStreaming || !this.currentSessionId) return;

    const userMessage = this.currentMessage.trim();
    this.currentMessage = '';

    // Add user message
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
          this.streamingMessage += data.content;
          this.messages[assistantMessageIndex].content = this.streamingMessage;
          this.scrollToBottom();
        } else if (data.type === 'done') {
          this.messages[assistantMessageIndex].content = data.full_response;
          this.streamingMessage = '';
          this.isStreaming = false;
          this.scrollToBottom();
        } else if (data.type === 'error') {
          this.messages[assistantMessageIndex].content = 'Error: ' + data.message;
          this.isStreaming = false;
        }
      },
      (error) => {
        console.error('Chat error:', error);
        this.messages[assistantMessageIndex].content = 'Connection error. Please try again.';
        this.isStreaming = false;
      }
    );

    this.subscriptions.push(sub);
  }

  /**
   * Scroll to bottom
   */
  scrollToBottom() {
    setTimeout(() => {
      if (this.content) {
        this.content.scrollToBottom(300);
      }
    }, 100);
  }

  /**
   * Clear chat
   */
  clearChat() {
    this.messages = [];
    this.initializeSession(); // Create new session
  }
}
