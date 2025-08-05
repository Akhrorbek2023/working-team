import React from 'react'

const App = () => {
    return (
        <div className='bg-black text-white h-screen'><br />
            <div className='text-center flex gap-4 justify-center'>
                <h1 className='text-3xl font-bold '>Our Latest</h1>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#b17ff7] to-[#58d3f6] bg-clip-text text-transparent"> Activity </h1>
            </div>
            <h1 className='text-center font-medium text-white/60 mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum cum, <br />ullam fugiat eaque similique culpa officia enim consequatur facere?</h1>
            <div className='flex justify-center mt-10'>
                <div className='overflow-hidden rounded-2xl w-[900px] h-[500px]'>
                    <img src="r1.jpg" alt="" className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'/>
                </div>
            </div>
        </div>
    )
}

export default App
