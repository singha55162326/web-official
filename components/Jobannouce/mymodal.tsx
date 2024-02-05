"use client";

// Import necessary dependencies and styles
// Import necessary dependencies and styles
import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal Component
const MyModal = ({ isOpen, closeModal, title, onSubmit }) => {
  // Modal style for centering
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none', // Remove border from the modal
    },
  };

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age:'',
    resume: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Call the onSubmit prop with the form data
    onSubmit(formData);
    // Close the modal
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="My Modal" style={modalStyle}>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <img className='ml-[40%]' src="images/image 2.png"/>
        <h1 className="text-2xl text-center font-semibold mb-6">ຟອມສະໝັກວຽກ</h1>

        {/* Form inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
              ຊື່ ແລະ ນາມສະກຸນ
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input w-full  shadow-md rounded-md"
              placeholder='ປ້ອນຊື່ ແລະ ນາມສະກຸນ'
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium">ເພດ</label>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                className="radio"
              />
              <label htmlFor="male" className="text-xs font-normal">
                ເພດຊາຍ
              </label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                className="radio"
              />
              <label htmlFor="female" className="text-xs font-normal">
                ເພດຍິງ
              </label>

              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
                className="radio text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="other" className="text-xs font-normal">
                ອື່ນໆ
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
              ອາຍຸ
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.age}
              onChange={handleInputChange}
              className="input w-full  shadow-md rounded-md"
              placeholder='ປ້ອນອາຍຸ'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
              ຕຳແໜ່ງ
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input w-full  shadow-md rounded-md"
              placeholder='ປ້ອນຕຳແໜ່ງ'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
            ອີເມວ
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input w-full  shadow-md rounded-md"
              placeholder='test@gmail.com'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
              ເບີໂທລະສັບ
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input w-full shadow-md rounded-md"
              placeholder='020xxxxxxxx'
            />
          </div>

         
 
        </div>

        
        <div className="flex items-center justify-center w-full">
          
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    ອັບໂຫລດ File resume
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p>ສາມາດອັບໂຫລດເປັນ File: PDF, word, pNG, JPEG, JPG</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div>

        {/* Form buttons */}
        <div className="flex justify-end mt-6">
          <button onClick={closeModal} className="btn bg-gray-400 text-white mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="btn bg-indigo-900 text-white">
            Submit
          </button>
        </div>

        {/* Additional information */}
     
      </div>
    </Modal>
  );
};

export default MyModal;
