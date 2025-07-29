'use client';

import { useState } from 'react';
import { Quote } from '@/types/quote';

interface QuoteCardProps {
  quote: Quote;
  onEdit: (id: string, text: string, author: string) => void;
  onDelete: (id: string) => void;
}

export default function QuoteCard({ quote, onEdit, onDelete }: QuoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(quote.text);
  const [editAuthor, setEditAuthor] = useState(quote.author);

  const handleSave = () => {
    if (editText.trim() && editAuthor.trim()) {
      onEdit(quote.id, editText.trim(), editAuthor.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(quote.text);
    setEditAuthor(quote.author);
    setIsEditing(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
        <div className="space-y-4">
          <div>
            <label htmlFor={`quote-text-${quote.id}`} className="block text-sm font-medium text-gray-700 mb-2">
              Quote
            </label>
            <textarea
              id={`quote-text-${quote.id}`}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
              placeholder="Enter the quote..."
            />
          </div>
          <div>
            <label htmlFor={`quote-author-${quote.id}`} className="block text-sm font-medium text-gray-700 mb-2">
              Author
            </label>
            <input
              id={`quote-author-${quote.id}`}
              type="text"
              value={editAuthor}
              onChange={(e) => setEditAuthor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter the author..."
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!editText.trim() || !editAuthor.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <blockquote className="text-lg text-gray-800 leading-relaxed mb-3">
            &quot;{quote.text}&quot;
          </blockquote>
          <cite className="text-blue-600 font-medium">— {quote.author}</cite>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">
          Added {formatDate(quote.createdAt)}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            title="Edit quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this quote?')) {
                onDelete(quote.id);
              }
            }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            title="Delete quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}