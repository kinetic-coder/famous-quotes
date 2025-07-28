'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Quote } from '@/types/database'
import { createClientComponentClient } from '@/lib/supabase'
import QuoteCard from '@/components/QuoteCard'
import AddQuoteForm from '@/components/AddQuoteForm'
import { LogOut, User, MessageSquareQuote } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const { user, signOut } = useAuth()
  const router = useRouter()
  const supabase = createClientComponentClient()

  const fetchQuotes = useCallback(async () => {
    if (!user) return
    
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setQuotes(data || [])
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    if (!user) {
      router.push('/')
      return
    }
    fetchQuotes()
  }, [user, router, fetchQuotes])

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquareQuote className="text-blue-600" size={24} />
              <h1 className="text-xl font-bold text-gray-900">My Quotes</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User size={16} />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {quotes.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquareQuote size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">No quotes yet</h2>
            <p className="text-gray-600 mb-6">
              Start collecting memorable quotes from your friends and colleagues!
            </p>
            <div className="text-sm text-gray-500">
              <p>Tap the + button to add your first quote</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                {quotes.length} {quotes.length === 1 ? 'Quote' : 'Quotes'}
              </h2>
            </div>
            
            <div className="grid gap-4">
              {quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  onDelete={fetchQuotes}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Add Quote Button */}
      <AddQuoteForm onQuoteAdded={fetchQuotes} />
    </div>
  )
}