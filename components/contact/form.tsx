'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import Button from '../ui/Button'
import Input from '../ui/Input'

type Inputs = {
  email: string
  name: string
  subject: string
  message: string
}

export default function ContactForm () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = data => {
    toast('Thank You for reaching out to us. We will update you shortly.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 mx-8 lg:mx-0 xl:mx-8'
    >
      <Input
        htmlFor='name'
        id='name'
        placeholder='Enter your name'
        required
        register={register}
        type='text'
        name='name'
        error={errors}
        className='border-none p-3.5 px-3.5'
      />
      <Input
        htmlFor='email1'
        id='email'
        placeholder='name@xyz.com'
        required
        register={register}
        type='email'
        name='email'
        error={errors}
        className='border-none p-3.5 px-3.5'
      />
      <Input
        htmlFor='subject'
        id='subject'
        placeholder='Enter your subject'
        required
        register={register}
        type='text'
        name='subject'
        error={errors}
        className='border-none p-3.5 px-3.5'
      />
      <textarea
        id='message'
        {...register('message')}
        placeholder='Enter message'
        rows={4}
        className=' border-none p-3.5 px-3.5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full min-h-[3rem]'
      ></textarea>
      <Button
        type='submit'
        text='Submit'
        className='md:-mb-10 mb-8 mx-auto w-fit mt-4 bg-black text-white'
      />
    </form>
  )
}
