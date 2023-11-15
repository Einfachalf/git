/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

export default function Completion() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [imageURL, setImageURL] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await fetch('/api/text-to-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    })

    if (response.ok) {
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setImageURL(url)
    }

    setIsLoading(false)
  }
  return (
    <main className='flex flex-col max-w-xl mx-auto h-screen gap-4 py-10'>
      <div className='flex-1 overflow-y-auto px-2 space-y-2'>
        {isLoading && <p>Loading...</p>}
        {!isLoading && imageURL && <img src={imageURL} alt='Generated Image' />}
      </div>

      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='flex-1 bg-transparent rounded border px-2'
        />
        <button type='submit' className='border px-2 py-1 rounded' disabled={isLoading}>
          Send
        </button>
      </form>
    </main>
  )
}
