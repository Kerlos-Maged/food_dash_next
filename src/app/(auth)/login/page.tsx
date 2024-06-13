import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <section className='relative flex w-full min-h-[100vh] h-max'>
      {/* IMAGE CONTAINER  */}
      <div className='lg:relative lg:w-1/2 md:w-full md:absolute min-h-[100vh] h-max bg-bg-1 bg-cover bg-center'/>
      {/* FORM CONTAINER  */}
      <div className="flex items-center justify-center w-1/2 ">
        <div className="flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-4">
            <Link href={'/'} className="cursor-pointer">  
              <Image src={'/Frame 18.png'} alt="" width={170} height={70}/>
            </Link>
            <h2 className="font-semibold text-3xl  text-font-black">Login to your acccount</h2>
          </div>
          <div className="flex items-center justify-center gap-8 py-8">
            <Link href={'/'} className={'flex items-center justify-center gap-3 ring-1 ring-gray-300 p-2 rounded-xl'}>
              <Image src={'/facebook (3).png'} width={28} height={28}  alt={''}/>
              <p>Login With Facebook</p>
            </Link>
            <Link href={'/'} className={'flex items-center justify-center gap-3 ring-1 ring-gray-300 p-2 rounded-xl'}>
              <Image src={'/search (2).png'} width={28} height={28}  alt={''}/>
              <p>Login With Google</p>
            </Link>
          </div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className='text-sm text-font-gray'>Email Addres</label>
              <input type="text" name={'email'} placeholder='Youraddres@example.com' className="p-1 border-b-border border-b-[1px] outline-none"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className='text-sm text-font-gray'>Password</label>
              <input type="text" name={'email'} placeholder='example123' className="p-1 border-b-border border-b-[1px] outline-none"/>
            </div>
            <Button variant={'primary'} className='w-[300px] font-extrabold'>Login to Continue</Button>
            <p>Don't have an account ? <Link href={'/register'} className='text-primary'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
