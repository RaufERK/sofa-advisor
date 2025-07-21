'use client'

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
      <div className='bg-gray-950/40 backdrop-blur-md rounded-3xl max-w-md w-full p-8 border border-gray-900/60 shadow-2xl'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-white'>О чат-боте</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-purple-300 transition-all duration-300 p-2 hover:bg-gray-700 rounded-full'
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='space-y-6 text-gray-300'>
          <p className='text-lg leading-relaxed'>
            Это учебный чат-бот службы поддержки мебельной компании
            &quot;Диванчик&quot;.
          </p>

          <div>
            <h3 className='font-semibold text-purple-300 mb-3 text-lg'>
              Что умеет бот:
            </h3>
            <ul className='space-y-2 text-base'>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Отвечает на вопросы о диванах</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Помогает с выбором ткани и размера</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Консультирует по уходу за мебелью</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Информирует о доставке и гарантии</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-purple-300 mb-3 text-lg'>
              Технологии:
            </h3>
            <ul className='space-y-2 text-base'>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Next.js 15 + TypeScript</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Tailwind CSS для стилизации</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>OpenRouter API (Claude 3 Haiku)</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-3 mt-1'>•</span>
                <span>Адаптивный дизайн</span>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className='w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]'
        >
          Понятно
        </button>
      </div>
    </div>
  )
}
