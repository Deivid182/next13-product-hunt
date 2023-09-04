'use client';
import { useState } from 'react';
import { AiOutlineBell, AiOutlineMessage } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import Avatar from '../ui/avatar';
import MenuItem from './menu-item';
import SubmitItem from './submit-item';

const UserMenu = () => {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='flex items-center gap-x-4'>
        <div
          onMouseOver={() => setIsSubmitOpen(true)}
          onMouseLeave={() => setIsSubmitOpen(false)}
          className='hidden 
          lg:block 
          text-lg 
          font-normal 
          tracking-tight 
          py-3 px-4 
          text-coral-red 
          hover:text-[#ff5252] 
          transition 
          cursor-pointer'
        >
          Submit
        </div>
        {isSubmitOpen && (
          <div
            onMouseOver={() => setIsSubmitOpen(true)}
            onMouseLeave={() => setIsSubmitOpen(false)}
            className='absolute top-12 right-24 rounded-xl shadow-md w-[20vw] bg-white overflow-hidden text-sm'
          >
            <div className='flex flex-col gap-y-6'>
              <SubmitItem
                icon={BiRocket}
                title='New Product'
                description='Launch your new product'
              />
              <SubmitItem
                icon={AiOutlineMessage}
                title='New discussion'
                description='Contribute to the conversation'
              />
              <div
                className='px-4 
                py-3 
                text-slate-gray 
                bg-neutral-100 
                hover:text-gray-700 
                transition-colors 
                text-lg 
                tracking-tight 
                cursor-pointer '
              >
                <p className='font-medium'>Need help?</p>
                <p>Read our launch guide</p>
              </div>
            </div>
          </div>
        )}
        <div className='flex items-center gap-x-2 text-slate-gray'>
          <AiOutlineBell className='w-6 h-6' />
          <span>0</span>
        </div>
        <div
          onMouseOver={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
          className='rounded-full border-2 border-neutral-200'
        >
          <Avatar />
        </div>
        {isProfileOpen && (
          <div
            onMouseOver={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
            className='absolute top-12 right-0 rounded-xl shadow-md w-[15vw] bg-white overflow-hidden text-sm'
          >
            <div className='flex flex-col'>
              <MenuItem label='Profile' />
              <MenuItem label='Settings' />
              <MenuItem label='My Products' />
              <MenuItem label='Logout' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
