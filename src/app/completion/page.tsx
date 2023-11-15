'use client'

import { useCompletion } from 'ai/react'

export default function Completion() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/completion',
  })

  return (
    <main className='flex flex-col max-w-xl mx-auto h-screen gap-4 py-10'>
      <div className='flex-1 overflow-y-auto px-2 space-y-2'>{completion}</div>

      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input value={input} onChange={handleInputChange} className='flex-1 bg-transparent rounded border px-2' />
        <button type='submit' className='border px-2 py-1 rounded' disabled={isLoading}>
          Send
        </button>
      </form>
    </main>
  )
}
