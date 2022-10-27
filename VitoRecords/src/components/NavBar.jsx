import React from 'react'

export default function NavBar()  {


    return (
<div className="video__back">
  <img className=' max-h-[600px] w-full' src="/images/img_back.png" alt="" />
    <div className='p-4 flex navbar_container justify-between absolute top-[1%] w-[100%] '>
      <div className='img_vito z-10'>
      <img  className ="" src="/images/vitonavbar.png" alt="" />
      </div>
      <div className='flex z-10 gap-3 items-center '>
      <img className='links insta' src="/images/insta.png" alt="" />
      <img className='links email ' src="/images/mail.png" alt="" />
      <img className='links wsp' src="/images/wasap.png" alt="" />
      </div>
      </div>
      </div>
       )
  }

