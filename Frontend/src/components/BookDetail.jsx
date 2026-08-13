import React from 'react'
import { useParams, Link } from 'react-router-dom'
import bookCover from '../assets/book.png'

const books = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    description: 'A moving story about choices, second chances, and the lives we could have lived.',
    details: 'Follow Nora Seed as she discovers alternate lives she could have lived, and learns what really matters.',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    description: 'A practical guide to building better habits and breaking bad ones in small steps.',
    details: 'Learn how tiny daily changes can lead to remarkable results and lasting behavior change.',
  },
  {
    id: 3,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    description: 'A powerful memoir about resilience, education, and finding one’s own voice.',
    details: 'A memoir about growing up in a strict household and escaping through education.',
  },
]

const BookDetail = () => {
  const { id } = useParams()
  const book = books.find((item) => item.id === Number(id))

  if (!book) {
    return (
      <div className='min-h-screen bg-gray-700 flex items-center justify-center px-4 py-12'>
        <div className='rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl'>
          <h2 className='text-2xl font-bold'>Book not found</h2>
          <p className='mt-4 text-gray-300'>The book you are looking for does not exist.</p>
          <Link to='/' className='mt-6 inline-block rounded-3xl bg-sky-500 px-5 py-3 text-white transition hover:bg-sky-400'>Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-700 flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-4xl rounded-4xl border border-gray-600 bg-slate-900/95 p-10 shadow-2xl shadow-black/40'>
        <div className='grid gap-10 md:grid-cols-[1fr_1.2fr]'>
          <div className='rounded-3xl overflow-hidden border border-gray-700 bg-gray-800'>
            <img src={bookCover} alt={book.title} className='h-full w-full object-cover' />
          </div>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-sky-300'>{book.category}</p>
            <h1 className='mt-4 text-4xl font-bold text-white'>{book.title}</h1>
            <p className='mt-2 text-lg text-gray-300'>By {book.author}</p>
            <p className='mt-6 text-gray-300'>{book.details}</p>
            <div className='mt-8 flex flex-col gap-4'>
              <Link to='/' className='inline-flex rounded-3xl bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-700'>Back to books</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
