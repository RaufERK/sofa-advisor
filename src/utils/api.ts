import { ChatRequest, ChatResponse } from '@/types/chat'

export async function sendChatRequest(question: string): Promise<ChatResponse> {
  const response = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question } as ChatRequest),
  })

  const data: ChatResponse = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Произошла ошибка при отправке запроса')
  }

  return data
}

export function validateQuestion(question: string): string | null {
  if (!question || question.trim().length === 0) {
    return 'Пожалуйста, введите вопрос'
  }

  if (question.trim().length < 3) {
    return 'Вопрос должен содержать минимум 3 символа'
  }

  return null
}
