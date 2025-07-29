'use client';

import { useState, useEffect } from 'react';
import { Quote } from '@/types/quote';

const STORAGE_KEY = 'famous-quotes';

// Default quotes to populate the app initially
const defaultQuotes: Quote[] = [
  {
    id: '1',
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    text: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'John Lennon',
    createdAt: new Date('2024-01-02')
  },
  {
    id: '3',
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    createdAt: new Date('2024-01-03')
  }
];

export function useLocalStorage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load quotes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedQuotes = JSON.parse(stored).map((quote: Quote & { createdAt: string }) => ({
          ...quote,
          createdAt: new Date(quote.createdAt)
        }));
        setQuotes(parsedQuotes);
      } else {
        // Initialize with default quotes if nothing in storage
        setQuotes(defaultQuotes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultQuotes));
      }
    } catch (error) {
      console.error('Error loading quotes from localStorage:', error);
      setQuotes(defaultQuotes);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save quotes to localStorage whenever quotes change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
      } catch (error) {
        console.error('Error saving quotes to localStorage:', error);
      }
    }
  }, [quotes, isLoaded]);

  const addQuote = (text: string, author: string) => {
    const newQuote: Quote = {
      id: Date.now().toString(),
      text,
      author,
      createdAt: new Date()
    };
    setQuotes(prev => [newQuote, ...prev]);
  };

  const updateQuote = (id: string, text: string, author: string) => {
    setQuotes(prev => 
      prev.map(quote => 
        quote.id === id 
          ? { ...quote, text, author }
          : quote
      )
    );
  };

  const deleteQuote = (id: string) => {
    setQuotes(prev => prev.filter(quote => quote.id !== id));
  };

  return {
    quotes,
    isLoaded,
    addQuote,
    updateQuote,
    deleteQuote
  };
}