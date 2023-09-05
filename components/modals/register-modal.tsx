"use client"
import Modal from './modal'
import useLoginModal from '../../hooks/use-login-modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form'
import Heading from '../ui/heading'
import Input from '../inputs/input'
import { useCallback, useState } from 'react'
import Button from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai';
import useRegisterModal from '@/hooks/use-register-modal'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const RegisterModal = () => {

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const handleToggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
    
  }, [registerModal, loginModal])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    axios.post('/api/register', data)
      .then(res => {
        toast.success(res.data.message)
        registerModal.onClose()
        loginModal.onOpen()     
      })
      .catch(err => toast.error(err.response.data.message))
      .finally(() => setIsLoading(false))
  }

  const bodyContent = (
    <div className='flex flex-col gap-y-4'>
      <Heading
        title='Welcome back!'
        subtitle='Log in to your account.'
      />
      <Input
        id='name'
        label='Name'
        type='text'
        register={register}
        errors={errors}
        required        
        disabled={isLoading}
      />
      <Input
        id='email'
        label='Email'
        type='email'
        register={register}
        errors={errors}
        required        
        disabled={isLoading}
      />
      <Input
        id='password'
        label='Password'
        type='password'
        register={register}
        errors={errors}
        required  
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-y-4 max-sm:p-1'>
      <hr />
      <Button
        outline
        onClick={loginModal.onClose}
        disabled={isLoading}
        label='Login with Google'
        icon={FcGoogle}

      />
      <Button 
        outline
        onClick={loginModal.onClose}
        disabled={isLoading}
        label='Login with Github'
        icon={AiOutlineGithub}
      />
      <div className="text-neutral-500 text-center mt-2 font-light">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div>Already have an account?</div>
          <div
            onClick={handleToggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      title='Register'
      actionLabel='Continue'
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal 