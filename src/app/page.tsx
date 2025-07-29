'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import QuoteCard from '@/components/QuoteCard';
import AddQuoteModal from '@/components/AddQuoteModal';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function Home() {
  const { quotes, isLoaded, addQuote, updateQuote, deleteQuote } = useLocalStorage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show loading state while data is being loaded from localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation onAddQuote={() => {}} />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAddQuote={() => setIsModalOpen(true)} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Famous Quotes Collection</h1>
          <p className="text-gray-600">
            Discover, add, and manage your favorite quotes. Click on any quote to edit or delete it.
          </p>
        </div>

        {quotes.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No quotes yet</h3>
            <p className="text-gray-600 mb-6">
              Start building your collection by adding your first quote.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Your First Quote
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {quotes.map((quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
                onEdit={updateQuote}
                onDelete={deleteQuote}
              />
            ))}
          </div>
        )}
      </main>

      <AddQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addQuote}
      />
    </div>
  );
}
