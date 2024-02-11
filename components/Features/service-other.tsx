import Link from 'next/link'
import React from 'react'

type Props = {}

const Serviceother = (props: Props) => {
  return (
    <div className="w-full px-5 py-2 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="wow fadeInUp flex items-center">
      <Link href="/contact">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20 text-primary cursor-pointer">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="201.000000pt" height="201.000000pt" viewBox="0 0 201.000000 201.000000"
        preserveAspectRatio="xMidYMid meet">

       <g transform="translate(0.000000,201.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M215 1876 c-40 -18 -73 -56 -85 -97 -6 -19 -10 -151 -10 -294 0 -251
       1 -263 23 -305 39 -78 48 -80 377 -80 319 0 335 3 375 71 19 32 20 52 20 326
       0 279 -1 293 -21 319 -11 15 -33 37 -48 48 -26 20 -42 21 -314 23 -224 2 -294
       0 -317 -11z m573 -383 l-3 -268 -265 0 -265 0 -3 268 -2 267 270 0 270 0 -2
       -267z"/>
       <path d="M1215 1876 c-40 -18 -73 -56 -85 -97 -6 -19 -10 -151 -10 -294 0
       -251 1 -263 23 -305 39 -78 48 -80 377 -80 319 0 335 3 375 71 19 32 20 52 20
       326 0 279 -1 293 -21 319 -11 15 -33 37 -48 48 -26 20 -42 21 -314 23 -224 2
       -294 0 -317 -11z m573 -383 l-3 -268 -265 0 -265 0 -3 268 -2 267 270 0 270 0
       -2 -267z"/>
       <path d="M1455 914 c-48 -24 -333 -314 -356 -361 -16 -34 -19 -52 -14 -85 7
       -39 25 -60 174 -211 91 -93 178 -175 193 -183 35 -18 101 -18 136 0 15 8 100
       88 189 178 243 246 243 245 -10 495 -89 89 -175 166 -190 172 -40 15 -87 13
       -122 -5z m222 -256 c84 -84 153 -157 153 -163 0 -5 -70 -80 -155 -165 l-155
       -155 -155 155 c-85 85 -155 159 -155 165 0 9 300 315 309 315 3 0 73 -68 158
       -152z"/>
       <path d="M215 876 c-40 -18 -73 -56 -85 -97 -6 -19 -10 -151 -10 -294 0 -251
       1 -263 23 -305 39 -78 48 -80 377 -80 319 0 335 3 375 71 19 32 20 52 20 326
       0 279 -1 293 -21 319 -11 15 -33 37 -48 48 -26 20 -42 21 -314 23 -224 2 -294
       0 -317 -11z m573 -383 l-3 -268 -265 0 -265 0 -3 268 -2 267 270 0 270 0 -2
       -267z"/>
       </g>
       </svg>
        </div>
      </Link>
  
      <div className="ml-4">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
        ບໍລິການອື່ນໆ
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
         
        </p>
      </div>
    </div>
  </div>
  )
}

export default Serviceother