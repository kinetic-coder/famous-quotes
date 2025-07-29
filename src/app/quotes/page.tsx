'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Save, X, Quote } from 'lucide-react';

interface Quote {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isAddingQuote, setIsAddingQuote] = useState(false);
  const [editingQuote, setEditingQuote] = useState<string | null>(null);
  const [newQuote, setNewQuote] = useState({ text: '', author: '' });
  const [editText, setEditText] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  // Load quotes from localStorage on component mount
  useEffect(() => {
    const savedQuotes = localStorage.getItem('famous-quotes');
    if (savedQuotes) {
      try {
        const parsedQuotes = JSON.parse(savedQuotes);
        setQuotes(parsedQuotes);
      } catch (error) {
        console.error('Error parsing quotes from localStorage:', error);
        // Initialize with some sample quotes if parsing fails
        initializeDefaultQuotes();
      }
    } else {
      // Initialize with some sample quotes
      initializeDefaultQuotes();
    }
  }, []);

  const initializeDefaultQuotes = () => {
    const defaultQuotes: Quote[] = [
      {
        id: '1',
        text: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        text: 'Innovation distinguishes between a leader and a follower.',
        author: 'Steve Jobs',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        text: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt',
        createdAt: new Date().toISOString()
      }
    ];
    setQuotes(defaultQuotes);
    localStorage.setItem('famous-quotes', JSON.stringify(defaultQuotes));
  };

  // Save quotes to localStorage
  const saveQuotesToStorage = (quotesToSave: Quote[]) => {
    localStorage.setItem('famous-quotes', JSON.stringify(quotesToSave));
  };

  // Add new quote
  const handleAddQuote = () => {
    if (newQuote.text.trim() && newQuote.author.trim()) {
      const quote: Quote = {
        id: Date.now().toString(),
        text: newQuote.text.trim(),
        author: newQuote.author.trim(),
        createdAt: new Date().toISOString()
      };
      const updatedQuotes = [...quotes, quote];
      setQuotes(updatedQuotes);
      saveQuotesToStorage(updatedQuotes);
      setNewQuote({ text: '', author: '' });
      setIsAddingQuote(false);
    }
  };

  // Start editing a quote
  const startEditingQuote = (quote: Quote) => {
    setEditingQuote(quote.id);
    setEditText(quote.text);
    setEditAuthor(quote.author);
  };

  // Save edited quote
  const handleSaveEdit = (id: string) => {
    if (editText.trim() && editAuthor.trim()) {
      const updatedQuotes = quotes.map(quote =>
        quote.id === id
          ? { ...quote, text: editText.trim(), author: editAuthor.trim() }
          : quote
      );
      setQuotes(updatedQuotes);
      saveQuotesToStorage(updatedQuotes);
      setEditingQuote(null);
      setEditText('');
      setEditAuthor('');
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingQuote(null);
    setEditText('');
    setEditAuthor('');
  };

  // Delete quote
  const handleDeleteQuote = (id: string) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      const updatedQuotes = quotes.filter(quote => quote.id !== id);
      setQuotes(updatedQuotes);
      saveQuotesToStorage(updatedQuotes);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Content area with top padding to account for fixed navigation */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Quote className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Famous Quotes</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover inspiration from great minds and add your own favorite quotes to the collection.
            </p>
          </div>

          {/* Add Quote Button */}
          <div className="mb-8 text-center">
            <button
              onClick={() => setIsAddingQuote(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Quote
            </button>
          </div>

          {/* Add Quote Form */}
          {isAddingQuote && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Quote</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="quote-text" className="block text-sm font-medium text-gray-700 mb-2">
                    Quote Text
                  </label>
                  <textarea
                    id="quote-text"
                    rows={3}
                    value={newQuote.text}
                    onChange={(e) => setNewQuote({ ...newQuote, text: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter the quote text..."
                  />
                </div>
                <div>
                  <label htmlFor="quote-author" className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    id="quote-author"
                    type="text"
                    value={newQuote.author}
                    onChange={(e) => setNewQuote({ ...newQuote, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter the author's name..."
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddQuote}
                    disabled={!newQuote.text.trim() || !newQuote.author.trim()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Quote
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingQuote(false);
                      setNewQuote({ text: '', author: '' });
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quotes List */}
          <div className="space-y-6">
            {quotes.length === 0 ? (
              <div className="text-center py-12">
                <Quote className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No quotes yet</h3>
                <p className="text-gray-600">Start building your collection by adding your first quote.</p>
              </div>
            ) : (
              quotes.map((quote) => (
                <div key={quote.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  {editingQuote === quote.id ? (
                    // Edit Mode
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quote Text
                        </label>
                        <textarea
                          rows={3}
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Author
                        </label>
                        <input
                          type="text"
                          value={editAuthor}
                          onChange={(e) => setEditAuthor(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleSaveEdit(quote.id)}
                          disabled={!editText.trim() || !editAuthor.trim()}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Display Mode
                    <div>
                      <blockquote className="text-lg text-gray-800 mb-4 italic font-medium leading-relaxed">
                        &ldquo;{quote.text}&rdquo;
                      </blockquote>
                      <div className="flex justify-between items-center">
                        <cite className="text-base text-blue-600 font-semibold not-italic">
                          — {quote.author}
                        </cite>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => startEditingQuote(quote)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            title="Edit quote"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteQuote(quote.id)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            title="Delete quote"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Quote Count */}
          {quotes.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                {quotes.length} {quotes.length === 1 ? 'quote' : 'quotes'} in your collection
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}