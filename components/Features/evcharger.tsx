import Link from 'next/link'
import React from 'react'

type Props = {}

const Evcharger = (props: Props) => {
  return (
    <div className="w-full px-5 py-2 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="wow fadeInUp flex items-center">
      <Link href="/contact">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20 text-primary cursor-pointer">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="180.000000pt" height="180.000000pt" viewBox="0 0 180.000000 180.000000"
        preserveAspectRatio="xMidYMid meet">

       <g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M111 1778 c-24 -13 -57 -43 -75 -67 l-31 -43 -3 -794 c-3 -868 -4
       -842 54 -864 15 -6 202 -10 445 -10 457 0 469 1 489 56 6 14 10 171 10 360 l0
       335 73 -3 72 -3 5 -281 5 -281 30 -48 c17 -27 50 -64 73 -82 133 -101 324 -50
       396 106 20 45 21 61 24 544 3 489 3 497 23 497 33 0 79 29 89 56 6 14 10 67
       10 119 0 88 -2 95 -25 113 -21 17 -25 28 -25 74 0 40 -5 59 -18 71 -45 41 -82
       6 -82 -76 l0 -57 -50 0 -50 0 0 58 c0 44 -5 63 -18 75 -44 40 -82 5 -82 -72 0
       -45 -4 -56 -25 -73 -24 -18 -25 -25 -25 -116 0 -122 17 -158 80 -168 l40 -7 0
       -489 0 -490 -34 -34 c-53 -53 -123 -44 -167 22 -17 27 -19 49 -19 292 0 286
       -3 304 -56 354 -41 38 -75 48 -165 48 l-79 0 0 373 c0 372 0 374 -23 418 -13
       24 -43 58 -66 74 l-43 30 -357 3 c-355 3 -357 3 -400 -20z m689 -428 l0 -250
       -300 0 -300 0 0 250 0 250 300 0 300 0 0 -250z m-176 -752 l73 -3 -121 -194
       -121 -194 -3 146 -3 146 -73 3 -73 3 121 194 121 194 3 -146 3 -146 73 -3z"/>
       </g>
       </svg>
        </div>
      </Link>
  
      <div className="ml-4">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
          EV Charger
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
       
        </p>
      </div>
    </div>
  </div>
  )
}

export default Evcharger