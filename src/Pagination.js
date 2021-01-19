import React from 'react';
import './Pagination.css';

export default function Pagination({ page, totalPages, handlePageClick }) {

    return (
        <div className='pagination'>
            <button
                className='btn'
                onClick={() => handlePageClick('prev')}
                disabled={page <= 1}
            >
                &larr;
            </button>
            <span className='pageClick'>
                page {page} of {totalPages}
            </span>
            <button
                className='btn'
                onClick={() => handlePageClick('next')}
                disabled={page >= totalPages}
            >
                &rarr;
            </button>
        </div>
    )
}