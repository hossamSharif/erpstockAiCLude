import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  tokens_used?: number;
}

export interface ChatSession {
  id: number;
  session_id: string;
  store_id: number;
  user_id: number;
  year_id: number;
  session_title: string;
  message_count: number;
  total_tokens: number;
  last_activity: string;
  created_at: string;
  is_active: number;
}

export interface AIInvoice {
  id: number;
  invoice_ref: string;
  store_id: number;
  user_id: number;
  year_id: number;
  invoice_type: string;
  pdf_file_path: string;
  pdf_file_name: string;
  pdf_file_size: number;
  extraction_status: 'pending' | 'processing' | 'completed' | 'failed';
  extracted_data: any;
  invoice_date: string;
  invoice_total: number;
  customer_supplier_name: string;
  customer_supplier_id: number;
  items_count: number;
  confidence_score: number;
  notes: string;
  created_at: string;
  extracted_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private api = 'https://erp.gvstech.net/myapiAi/api/';

  constructor(private http: HttpClient) { }

  /**
   * Upload PDF file for invoice extraction
   * @param file PDF file
   * @param store_id Store ID
   * @param user_id User ID
   * @param year_id Year ID
   * @param invoice_type Invoice type (sales, purchase, expense, other)
   * @returns Observable with upload result
   */
  uploadPDF(file: File, store_id: any, user_id: any, year_id: any, invoice_type: string = 'other'): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('store_id', store_id.toString());
    formData.append('user_id', user_id.toString());
    formData.append('year_id', year_id.toString());
    formData.append('invoice_type', invoice_type);

    return this.http.post(this.api + 'ai_assistant/uploadPDF.php', formData);
  }

  /**
   * Extract data from uploaded PDF
   * @param ai_invoice_id AI Invoice ID
   * @returns Observable with extraction result
   */
  extractPDF(ai_invoice_id: any): Observable<any> {
    const body = { ai_invoice_id: ai_invoice_id };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.api + 'ai_assistant/extractPDF.php', body, httpOptions);
  }

  /**
   * Chat with AI assistant (with streaming support)
   * @param session_id Session ID
   * @param message User message
   * @param store_id Store ID
   * @param user_id User ID
   * @param year_id Year ID
   * @param user_name User name
   * @returns Observable with streaming chunks
   */
  chatStream(
    session_id: string,
    message: string,
    store_id: any,
    user_id: any,
    year_id: any,
    user_name: string = 'User'
  ): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const url = `${this.api}ai_assistant/chat.php?` +
        `session_id=${encodeURIComponent(session_id)}` +
        `&message=${encodeURIComponent(message)}` +
        `&store_id=${store_id}` +
        `&user_id=${user_id}` +
        `&year_id=${year_id}` +
        `&user_name=${encodeURIComponent(user_name)}`;

      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          observer.next(data);

          // Close connection when done
          if (data.type === 'done' || data.type === 'error') {
            eventSource.close();
            observer.complete();
          }
        } catch (e) {
          console.error('Error parsing SSE data:', e);
        }
      };

      eventSource.onerror = (error) => {
        console.error('SSE Error:', error);
        eventSource.close();
        observer.error(error);
      };

      // Cleanup function
      return () => {
        eventSource.close();
      };
    });
  }

  /**
   * Get all chat sessions for a user
   * @param store_id Store ID
   * @param user_id User ID
   * @returns Observable with sessions list
   */
  getChatSessions(store_id: any, user_id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('store_id', store_id.toString());
    params = params.append('user_id', user_id.toString());

    return this.http.get(this.api + 'ai_assistant/getSessions.php', { params: params });
  }

  /**
   * Get chat history for a session
   * @param session_id Session ID
   * @returns Observable with chat history
   */
  getChatHistory(session_id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('session_id', session_id);

    return this.http.get(this.api + 'ai_assistant/getHistory.php', { params: params });
  }

  /**
   * Create a new chat session
   * @param store_id Store ID
   * @param user_id User ID
   * @param year_id Year ID
   * @param session_title Session title (optional)
   * @returns Observable with new session data
   */
  createSession(store_id: any, user_id: any, year_id: any, session_title: string = 'New Conversation'): Observable<any> {
    const body = {
      store_id: store_id,
      user_id: user_id,
      year_id: year_id,
      session_title: session_title
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.api + 'ai_assistant/createSession.php', body, httpOptions);
  }

  /**
   * Get AI-extracted invoices
   * @param store_id Store ID
   * @param year_id Year ID (optional)
   * @param status Extraction status (optional)
   * @returns Observable with invoices list
   */
  getAIInvoices(store_id: any, year_id?: any, status?: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('store_id', store_id.toString());

    if (year_id) {
      params = params.append('year_id', year_id.toString());
    }

    if (status) {
      params = params.append('status', status);
    }

    return this.http.get(this.api + 'ai_invoices/read.php', { params: params });
  }

  /**
   * Generate a unique session ID
   * @returns Unique session ID string
   */
  generateSessionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `sess_${timestamp}_${random}`;
  }

  /**
   * Format file size to human readable
   * @param bytes File size in bytes
   * @returns Formatted file size string
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Validate PDF file
   * @param file File to validate
   * @returns Validation result {valid: boolean, error: string}
   */
  validatePDF(file: File): { valid: boolean; error: string | null } {
    // Check file type
    if (file.type !== 'application/pdf') {
      return { valid: false, error: 'Invalid file type. Only PDF files are allowed.' };
    }

    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return { valid: false, error: 'File size exceeds 10MB limit.' };
    }

    // Check file extension
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.pdf')) {
      return { valid: false, error: 'Invalid file extension. Only .pdf files are allowed.' };
    }

    return { valid: true, error: null };
  }

  /**
   * Parse extracted invoice data
   * @param extractedData Raw extracted data from API
   * @returns Parsed invoice data
   */
  parseExtractedData(extractedData: string | object): any {
    if (typeof extractedData === 'string') {
      try {
        return JSON.parse(extractedData);
      } catch (e) {
        console.error('Error parsing extracted data:', e);
        return null;
      }
    }
    return extractedData;
  }

  /**
   * Get status color for extraction status
   * @param status Extraction status
   * @returns Ionic color name
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      case 'pending':
        return 'medium';
      case 'failed':
        return 'danger';
      default:
        return 'medium';
    }
  }

  /**
   * Get status icon for extraction status
   * @param status Extraction status
   * @returns Ionic icon name
   */
  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed':
        return 'checkmark-circle';
      case 'processing':
        return 'hourglass';
      case 'pending':
        return 'time';
      case 'failed':
        return 'close-circle';
      default:
        return 'help-circle';
    }
  }

  /**
   * Format confidence score
   * @param score Confidence score (0-100)
   * @returns Formatted score with percentage
   */
  formatConfidence(score: number): string {
    if (!score) return 'N/A';
    return `${Math.round(score)}%`;
  }

  /**
   * Get confidence color
   * @param score Confidence score (0-100)
   * @returns Ionic color name
   */
  getConfidenceColor(score: number): string {
    if (!score) return 'medium';
    if (score >= 90) return 'success';
    if (score >= 70) return 'warning';
    return 'danger';
  }
}
