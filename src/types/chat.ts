export interface ChatRequest {
  question: string
}

export interface ChatResponse {
  answer: string
  error?: string
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}
