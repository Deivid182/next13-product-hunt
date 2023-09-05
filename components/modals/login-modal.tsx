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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginModal = () => {

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleToggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
    
  }, [registerModal, loginModal])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true)
      await signIn('credentials', data)
      loginModal.onClose()
      reset()
      toast.success('Logged in successfully')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong') 
    } finally {
      setIsLoading(false)
    }
  }

  const bodyContent = (
    <div className='flex flex-col gap-y-4'>
      <Heading
        title='Welcome back!'
        subtitle='Log in to your account.'
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
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div>First time using Product Hunt?</div>
          <div
            onClick={handleToggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Sign Up here
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      title='Log in'
      actionLabel='Continue'
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal