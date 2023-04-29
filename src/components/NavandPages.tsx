import React from 'react';
import { Link } from 'react-router-dom';

export function NavandPages() {
  return (
    <nav className='h-[80px] flex justify-between px-5 bg-amber-300 items-center text-white'>

      <span className='font-bold'>Bysalkin</span>

      <span>
        <Link to='/' className='mr-8'>Pictures</Link>
        <Link to='/Second' className='mr-2'>???</Link>
      </span>

    </nav>
  )
}