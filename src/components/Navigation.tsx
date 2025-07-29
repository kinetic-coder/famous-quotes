'use client';

import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Code className="h-6 w-6" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">TechCorp</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}