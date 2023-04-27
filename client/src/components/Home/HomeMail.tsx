import React from 'react'

type Props = {}

const HomeMail = (props: Props) => {
  return (
    <div className='w-full h-auto'>
      <div className="container lg:max-w-[95%] md:max-w-[95%] mx-auto py-11 px-3">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:justify-between justify-center">
          <div className='lg:w-[70%] w-full'>
            <h1 className='text-2xl text-center lg:text-start text-second font-bold'>Join Our Mailing List.</h1>
            <h2 className='text-base lg:text-start text-center lg:pb-0 pb-5 lg:pt-3 pt-5 text-first'>Sign up by email to receive inspiration, product updates, and special offers from our team.</h2>
          </div>
          <form className='w-full lg:items-end mt-0 lg:mt-3'>
            <input type="email" placeholder='Your Email, If you please.' className='lg:w-[70%] w-[70%] py-4 px-9 border shadow-none outline-none  rounded-bl-2xl rounded-tl-2xl' />
            <button className='lg:text-lg md:text-base text-sm bg-sixth lg:py-4 lg:px-9 md:px-6 md:py-4 py-[1.2rem] px-4 text-white rounded-br-2xl rounded-tr-2xl'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomeMail