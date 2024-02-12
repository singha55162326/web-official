import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

const comingpage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-gray-800"> Featured <span className=' text-blue-950 font-bold'>Coming </span>Soon</h1>
    <img src='/coming.png' className="mt-4 text-gray-600"/>
    <Link href="/">
        <div className='border bg-blue-900 text-white font-bold p-2 rounded-md mt-4'>
          Back to Home
        </div>
      </Link>
  </div>
  
  )
}

export default comingpage