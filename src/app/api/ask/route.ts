import { NextRequest, NextResponse } from 'next/server'
import { ChatRequest, ChatResponse } from '@/types/chat'
import { SYSTEM_PROMPT } from '@/constants/prompts'

export async function POST(
  request: NextRequest
): Promise<NextResponse<ChatResponse>> {
  try {
    const body: ChatRequest = await request.json()
    const { question } = body

    if (!question || question.trim().length === 0) {
      return NextResponse.json(
        { answer: '', error: 'Вопрос не может быть пустым' },
        { status: 400 }
      )
    }

    // Используем OpenRouter API (можно заменить на GigaChat)
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer':
            process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          'X-Title': 'Sofa Advisor Bot',
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT,
            },
            {
              role: 'user',
              content: question,
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      }
    )

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    const answer =
      data.choices?.[0]?.message?.content ||
      'Извините, не удалось получить ответ'

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      {
        answer: '',
        error: 'Произошла ошибка при обработке запроса. Попробуйте позже.',
      },
      { status: 500 }
    )
  }
}
