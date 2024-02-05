import Formcomment from '@/components/Formcomment'
import React from 'react'


const commentpage = () => {
  return (
    <section  style={{  }}   className="z-40 h-full mb-20   " >


     <div  style={{ backgroundImage: 'url("/images/Comment.png")', filter: 'blur(0)' }} className="flex items-center   justify-center bg-cover bg-center h-screen"  >

     <form className="flex w-full flex-col items-center">
  <h1 className='text-white font-bold text-center z-10'>ສະແດງຄຳຄິດເຫັນຕໍ່ໄຟຟ້າລາວ</h1>
  <img className="w-10 mr-[30%] mt-20 absolute h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="images/Front view of a young indian female in casual clothes leaning on arms & bending knees.png" alt="Bordered avatar"/>

  <div className="relative w-[25%] ">




  <div className="px-4  py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="ກະລຸນາໃຊ້ຄຳສັບທີ່ສຸພາບ ແລະ ຢູ່ໃນຫລັກສິນລະທຳ" required></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button style={{ backgroundColor: "#29B851" }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
             ສົ່ງຄຳຄິດເຫັນ
           </button>
  </div>
  </div>
</form>





</div>


     </section>

  )
}

export default commentpage
