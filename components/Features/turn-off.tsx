import Link from 'next/link'
import React from 'react'

type Props = {}

const Turnoff = (props: Props) => {
  return (
    <div className="w-full px-5 py-2 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="wow fadeInUp flex items-center">
      <Link href="/turn-off-light">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20 text-primary cursor-pointer">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="201.000000pt" height="201.000000pt" viewBox="0 0 201.000000 201.000000"
        preserveAspectRatio="xMidYMid meet">

       <g transform="translate(0.000000,201.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M1672 1907 l-82 -82 130 -130 130 -130 80 80 c70 70 80 84 80 115 0
       33 -10 46 -99 133 -127 125 -128 125 -239 14z"/>
       <path d="M672 1854 c-18 -13 -22 -25 -22 -73 0 -63 18 -91 58 -91 37 0 52 26
       52 90 0 49 -4 61 -22 74 -12 9 -27 16 -33 16 -6 0 -21 -7 -33 -16z"/>
       <path d="M1189 1797 c-25 -7 -65 -25 -90 -39 -56 -33 -229 -209 -229 -234 0
       -11 134 -152 327 -346 276 -276 332 -328 356 -328 38 0 204 166 241 242 55
       112 55 224 -1 338 -41 83 -264 302 -349 342 -75 35 -182 46 -255 25z"/>
       <path d="M310 1700 c-29 -29 -25 -45 21 -95 45 -49 75 -57 102 -27 28 30 21
       64 -21 105 -42 42 -72 47 -102 17z"/>
       <path d="M172 1354 c-26 -18 -30 -65 -6 -88 16 -17 109 -22 130 -8 36 24 34
       81 -5 101 -29 16 -93 13 -119 -5z"/>
       <path d="M723 1227 l-68 -66 86 -86 c57 -57 90 -84 100 -79 7 3 38 33 67 65
       48 54 52 63 52 109 0 40 -5 56 -28 81 -24 27 -37 33 -85 37 l-57 4 -67 -65z"/>
       <path d="M358 1032 c-127 -131 -151 -179 -151 -310 0 -74 3 -89 36 -155 30
       -61 57 -94 165 -198 166 -163 206 -184 347 -184 90 0 106 3 159 29 75 37 256
       212 256 247 0 36 -645 679 -681 679 -20 0 -51 -26 -131 -108z"/>
       <path d="M1135 921 c-16 -10 -51 -41 -77 -68 l-48 -49 88 -87 87 -87 64 64
       c54 55 64 70 68 107 5 55 -23 104 -72 125 -46 19 -74 18 -110 -5z"/>
       <path d="M1738 723 c-26 -31 -28 -51 -7 -77 17 -22 28 -26 73 -26 39 0 57 5
       69 18 22 24 21 65 -1 85 -26 24 -114 23 -134 0z"/>
       <path d="M1612 414 c-34 -24 -29 -63 16 -107 46 -45 84 -49 108 -12 21 32 12
       55 -36 99 -45 40 -56 43 -88 20z"/>
       <path d="M102 336 c-54 -55 -82 -91 -82 -106 0 -16 33 -57 102 -126 132 -134
       133 -135 246 -21 l82 82 -128 128 c-70 70 -130 127 -133 127 -3 0 -42 -38 -87
       -84z"/>
       <path d="M1298 283 c-34 -38 -34 -115 -2 -148 21 -20 57 -19 77 3 24 27 23
       123 -1 145 -24 22 -55 22 -74 0z"/>
       </g>
       </svg>
        </div>
      </Link>
  
      <div className="ml-4">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
       ແຈ້ງການມອດໄຟ
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
         
        </p>
      </div>
    </div>
  </div>
  )
}

export default Turnoff