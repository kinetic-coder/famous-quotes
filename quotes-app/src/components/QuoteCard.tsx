'use client'

import { Quote } from '@/types/database'
import { formatDistanceToNow } from 'date-fns'
import { Quote as QuoteIcon, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { createClientComponentClient } from '@/lib/supabase'

interface QuoteCardProps {
  quote: Quote
  onDelete?: () => void
}

export default function QuoteCard({ quote, onDelete }: QuoteCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const supabase = createClientComponentClient()

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this quote?')) return

    setIsDeleting(true)
    try {
      const { error } = await supabase
        .from('quotes')
        .delete()
        .eq('id', quote.id)

      if (error) throw error
      onDelete?.()
    } catch (error) {
      console.error('Error deleting quote:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <QuoteIcon size={20} className="text-blue-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <blockquote className="text-gray-800 text-lg leading-relaxed mb-3">
            &ldquo;{quote.content}&rdquo;
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-medium">— {quote.author_name}</p>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(quote.created_at), { addSuffix: true })}
              </p>
            </div>
            
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="text-gray-400 hover:text-red-500 transition-colors p-1 disabled:opacity-50"
              title="Delete quote"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}