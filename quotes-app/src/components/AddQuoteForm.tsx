'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Plus, X } from 'lucide-react'
import { createClientComponentClient } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

const quoteSchema = z.object({
  content: z.string().min(1, 'Quote content is required').max(1000, 'Quote too long'),
  author_name: z.string().min(1, 'Author name is required').max(100, 'Name too long'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

interface AddQuoteFormProps {
  onQuoteAdded?: () => void
}

export default function AddQuoteForm({ onQuoteAdded }: AddQuoteFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useAuth()
  const supabase = createClientComponentClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    if (!user) return

    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('quotes')
        .insert({
          content: data.content,
          author_name: data.author_name,
          user_id: user.id,
        })

      if (error) throw error

      reset()
      setIsOpen(false)
      onQuoteAdded?.()
    } catch (error) {
      console.error('Error adding quote:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <Plus size={24} />
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Add New Quote</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Quote
            </label>
            <textarea
              id="content"
              {...register('content')}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter the quote..."
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="author_name" className="block text-sm font-medium text-gray-700 mb-1">
              Who said it?
            </label>
            <input
              type="text"
              id="author_name"
              {...register('author_name')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Friend's name or colleague"
            />
            {errors.author_name && (
              <p className="text-red-500 text-sm mt-1">{errors.author_name.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Adding...' : 'Add Quote'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}