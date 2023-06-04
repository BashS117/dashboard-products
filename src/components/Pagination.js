import React from 'react';

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination({limit,offset,total,handlePrev,handleNext}) {

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 ">
        Showing <span className="font-semibold text-gray-900 text-gray-900">{offset + 1}</span> to <span className="font-semibold text-gray-900 text-gray-900">{offset + limit}</span> of{' '}
        <span className="font-semibold text-gray-900 text-gray-900">{total}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          type="button"
          onClick={handlePrev}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}
