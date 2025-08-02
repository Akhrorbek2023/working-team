import React from 'react'

const App = () => {
  return (

    <div className='w-full bg-white/10 h-screen flex justify-center items-center py-28 gap-[250px]'>
      <img src="sms.png" className='w-[100px] absolute top-[370px] left-[250px]' alt="" />
      <img src="sms.png" className='w-[50px] absolute top-[300px] left-[610px]' alt="" />
      <img src="ch.png" className='w-[70px] absolute top-[240px] left-[250px]' alt="" />
      <img src="z.png" className='w-[80px] absolute top-[370px] left-[620px]' alt="" />
      <img src="https://img.icons8.com/fluency-systems-filled/48/hand-drawn-heart.png" className='w-[20px] h-[45px] absolute top-[530px] left-[270px]' alt="" />
      <img src="https://img.icons8.com/fluency-systems-filled/48/hand-drawn-heart.png" className='w-[20px] h-[45px] absolute top-[530px] left-[300px]' alt="" />
      <img src="https://img.icons8.com/fluency-systems-filled/48/hand-drawn-heart.png" className='w-[20px] h-[45px] absolute top-[530px] left-[330px]' alt="" />
      <div className=' p-5 rounded-3xl shadow-black/50 bg-white shadow-2xl  w-[335px] h-[355px] space-y-4'>
        <h1 className='font-bold text-xl '>Secure collaboration</h1>
        <ul className='flex bg-black/10 font-bold text-sm items-center rounded-2xl p-1 justify-between px-2 '>
          <li className='bg-white rounded-xl p-1 w-[75px] text-center '>Share</li>
          <li>Links</li>
          <li>Pubilish</li>
        </ul>
        <h1 className='font-bold text-black/60 text-sm'>Invite</h1>
        <div className='space-x-2 items-center flex'>
          <input type="text" placeholder='Enter your email' className='border rounded-2xl p-2 bg-black/10 font-bold' />
          <button className='bg-blue-600 rounded-xl w-[70px] h-[41px] text-white font-bold text-xs'>Share</button>
        </div>
        <h1 className='font-bold text-black/60 text-sm'>Shared with</h1>
        <div className='flex gap-3 items-center'>
          <img src="./1chisi.jpg" className='w-[35px] h-[35px] rounded-full' alt="" />
          <h1 className='font-medium text-black/60 text-sm'>Robert John</h1>
        </div>
        <div className='flex gap-3 items-center'>
          <img src="./2chisi.jpg" className='w-[35px] h-[35px] rounded-full' alt="" />
          <h1 className='font-medium text-black/60 text-sm'>Juliya Maco</h1>
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-black font-mono  '>Data exchange is <br />the most secure</h1><br />
        <p className='font-semibold text-black/60'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Maiores sed iusto similique <br /> provident ab.</p>
      </div>
    </div>
  )
}

export default App