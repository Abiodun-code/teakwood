import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <div className="container max-w-full lg:max-w-[50%] md:max-w-[60%] mx-auto px-7 lg:px-0 md:px-0 py-20">
        <div className="text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Contact Us</h1>
          <p className="text-lg lg:max-w-[70%] md:max-w-[90%] max-w-[80%] text-first mx-auto pt-4">Submit your question and our team will respond to the email provided as soon as possible</p>
        </div>
        <form className="pt-9 w-full">
          <div className="block">
            <p className="text-base">Your Name</p>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" type="text"/>
          </div>
          <div className="block pt-7">
            <p className="text-base">Your Email</p>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" type="email" />
          </div>
          <div className="block pt-7">
            <p className="text-base">Your Phone</p>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" type="number" />
          </div>
          <div className="block pt-7">
            <p className="text-base">Your Description</p>
            <textarea className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" rows="4"></textarea>
          </div>
          <button type="button" className="py-3 mt-7 w-full bg-second hover:bg-sixth text-white transition-all duration-300 text-center text-base">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm