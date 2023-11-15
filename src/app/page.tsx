'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <main className='flex flex-col max-w-xl mx-auto h-screen gap-4 py-10'>
      <div className='flex-1 overflow-y-auto px-2 space-y-2'>
        {messages.map(m => (
          <div key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input value={input} onChange={handleInputChange} className='flex-1 bg-transparent rounded border px-2' />
        <button type='submit' className='border px-2 py-1 rounded'>
          Send
        </button>
      </form>
    </main>
  )
}
