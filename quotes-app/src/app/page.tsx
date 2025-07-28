'use client'

import { useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/LoginForm'
import { MessageSquareQuote } from 'lucide-react'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <MessageSquareQuote className="text-blue-600" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quotes Collection
          </h1>
          <p className="text-gray-600">
            Capture and organize memorable quotes from your friends and colleagues
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 mb-8 text-sm">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Quick mobile-friendly quote entry</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Organize by author name</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Private and secure</span>
          </div>
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  )
}
