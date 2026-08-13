import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import bookCover from '../assets/book.png'

const books = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    description: 'A moving story about choices, second chances, and the lives we could have lived.',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    description: 'A practical guide to building better habits and breaking bad ones in small steps.',
  },
  {
    id: 3,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    description: 'A powerful memoir about resilience, education, and finding one’s own voice.',
  },
]

const FreeBook = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchText, setSearchText] = useState(searchParams.get('search') || '')
  const query = searchParams.get('search')?.trim().toLowerCase() || ''

  useEffect(() => {
    setSearchText(searchParams.get('search') || '')
  }, [searchParams])

  const filteredBooks = books.filter((book) => {
    if (!query) return true
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    )
  })

  return (
    <section className='bg-gray-700 px-4 py-12 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8'>
        <div className='mb-8 text-center md:text-left'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600'>FreeBooks</p>
          <h5 className='text-3xl font-bold text-gray-800 md:text-4xl'>Some Available Free Books</h5>
          <p className='mt-3 text-gray-600'>Explore a handpicked selection of free books.</p>
        </div>

        <form
          className='mb-8 flex flex-col gap-3 md:flex-row md:items-center'
          onSubmit={(event) => {
            event.preventDefault()
            const trimmed = searchText.trim()
            if (trimmed) {
              setSearchParams({ search: trimmed })
            } else {
              setSearchParams({})
            }
          }}
        >
          <input
            type='text'
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder='Search books by title, author, or category'
            className='w-full rounded-3xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200'
          />
          <button
            type='submit'
            className='rounded-3xl bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-500'
          >
            Search
          </button>
        </form>

        {query && filteredBooks.length === 0 && (
          <div className='rounded-3xl border border-yellow-300 bg-yellow-50 p-4 text-yellow-800'>
            No books found for "{searchText}".
          </div>
        )}

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                src={bookCover}
                alt={book.title}
                className='h-56 w-full object-cover transition duration-300 hover:scale-105'
              />

              <div className='p-5'>
                <p className='text-sm font-semibold text-blue-600'>{book.category}</p>
                <h6 className='mt-1 text-xl font-semibold text-gray-800'>{book.title}</h6>
                <p className='mt-1 text-sm text-gray-600'>By {book.author}</p>
                <p className='mt-3 text-sm text-gray-500'>{book.description}</p>
                <Link
                  to={`/book/${book.id}`}
                  className='mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700'
                >
                  Read Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeBook