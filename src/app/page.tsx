'use client'

import { useState } from 'react'
import InfoModal from './components/InfoModal'
import { EXAMPLE_QUESTIONS } from '@/constants/prompts'
import { sendChatRequest, validateQuestion } from '@/utils/api'

export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitQuestion()
  }

  const submitQuestion = async () => {
    const validationError = validateQuestion(question)
    if (validationError) {
      setError(validationError)
      return
    }

    setIsLoading(true)
    setError('')
    setAnswer('')

    try {
      const data = await sendChatRequest(question.trim())
      setAnswer(data.answer)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Произошла ошибка при отправке запроса'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-8 px-4'>
      <div className='max-w-2xl mx-auto'>
        {/* Заголовок */}
        <div className='text-center mb-8 relative'>
          <button
            onClick={() => setIsInfoModalOpen(true)}
            className='absolute top-0 right-0 p-3 text-gray-400 hover:text-purple-300 transition-all duration-300 hover:bg-gray-800 rounded-full'
            title='О проекте'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <h1 className='text-5xl font-bold text-green-300 italic mb-3'>
            Диванчик
          </h1>
          <p className='text-xl text-green-600 italic'>
            Служба поддержки мебельной компании
          </p>
        </div>

        {/* Форма */}
        <div className='bg-gray-950/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-gray-900/60'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='question'
                className='block text-sm font-semibold text-gray-200 mb-3'
              >
                Задайте вопрос о диванах
              </label>
              <textarea
                id='question'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    submitQuestion()
                  }
                }}
                placeholder='Например: Как выбрать ткань для дивана? Какие бывают размеры? Как ухаживать за диваном?'
                className='w-full px-6 py-4 bg-indigo-900/30
                border-2 border-violet-800 rounded-2xl focus:ring-2 focus:border-violet-800
                resize-none placeholder-gary-800 transition-all duration-300 text-lg text-white-700'
                rows={3}
                disabled={isLoading}
              />
            </div>

            <button
              type='submit'
              disabled={isLoading || !question.trim()}
              className=' bg-purple-800 w-full hover:from-indigo-700 hover:to-indigo-900  text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-indigo-500/25 transform hover:scale-[1.02] disabled:transform-none border-2 border-indigo-400 focus:ring-2 focus:ring-indigo-400'
            >
              {isLoading ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Пишет ответ...
                </>
              ) : (
                <>
                  <span>Спросить</span>
                  <span className='ml-2 text-sm opacity-70'>(⌘+Enter)</span>
                </>
              )}
            </button>
          </form>

          {/* Ошибка */}
          {error && (
            <div className='mt-6 p-4 bg-red-900/30 border border-red-500/30 rounded-2xl backdrop-blur-sm'>
              <p className='text-red-300 text-sm'>{error}</p>
            </div>
          )}
        </div>

        {/* Ответ */}
        {answer && (
          <div className='bg-gray-950/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-900/60'>
            <h2 className='text-xl font-semibold text-white mb-4 flex items-center'>
              <span className='w-2 h-2 bg-purple-400 rounded-full mr-3'></span>
              Ответ:
            </h2>
            <div className='prose prose-invert max-w-none'>
              <p className='text-gray-200 leading-relaxed whitespace-pre-wrap text-lg'>
                {answer}
              </p>
            </div>
          </div>
        )}

        {/* Подсказки */}
        {!answer && !isLoading && (
          <div className='bg-gray-950/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-900/60'>
            <h3 className='text-xl font-semibold text-purple-300 mb-4 flex items-center'>
              <span className='text-2xl mr-2'>💡</span>
              Попробуйте спросить:
            </h3>
            <ul className='space-y-3 text-gray-300'>
              {EXAMPLE_QUESTIONS.map((question, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-purple-400 mr-3 mt-1'>•</span>
                  <span className='text-purple-200 text-lg'>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Модальное окно с информацией */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </div>
  )
}
