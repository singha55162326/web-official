import React, { useState } from 'react'
import MyModal from './mymodal';
type Props = {}

const Formodal = (props: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  };

    const contentArray = Array.from({ length: 16 }, (_, index) => index + 1);
  return (
    <div>
        <div className='container mx-auto'>

            <div className='grid  grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  '>

            {contentArray.map((item) => (
      <div key={item} className='bg-white flex space-x-4 p-4 rounded-md shadow-md'>
        <div>
          <img className='rounded-md'src="images/image 82job .png"  />
        </div>
      
        <div className='flex-1  space-y-4'>
          <h1 className='font-bold text-xl'>
            ພະນັກງານພັດທະນາໂປຣແກຣມ
          </h1>
          <span className=''>
            ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ
          </span>
          <p>
            ຝ່າຍເຕັກໂນໂລຊີການສື່ສານ ແລະ ຂໍ້ມູນຂ່າວສານ
          </p>
          <p>
            ພະແນກ Application
          </p>
          <p>
            ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
          </p>
      
          <button onClick={openModal} className='bg-blue-900 p-2 rounded-md mt-2 text-white'>
            ສົ່ງຟອມສະໝັກ
          </button>
          <MyModal isOpen={isModalOpen}
        closeModal={closeModal}
        title="Custom Modal Title"
        onSubmit={handleSubmit} />
        </div>
      </div>
    ))}

                

            </div>


        </div>
        <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center  rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Formodal
