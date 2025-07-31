import React from 'react'
import iconTime from "../assets/iconTime.svg"
import iconSecure from "../assets/iconSecure.svg"
import iconheadphones from "../assets/iconheadphones.svg"

function SectionOneCard() {
  return (
    <div>
        <div className="max-w-[1800px] w-[90%] mt-0 m-auto flex items-center flex-wrap justify-evenly">
            <div className="w-[350px] p-2 border-zinc-200 border-2">
                <span className="bg-blue-600 p-3 rounded-md">
                    <img src={iconTime} className="w-[35px] h-[35px]" alt="time-image" />
                </span>
                <h3>Solve Problems Real Time</h3>
                <p>Real-time problem solving is not just about time,<br />it's about time. This allows you to solve problems<br />within a specified time problem has a solution.</p>
            </div>
            <div className="w-[350px] p-2 border-zinc-200 border-2">
                <span className="bg-yellow-300 p-3 rounded-md">
                    <img src={iconSecure} className="w-[35px] h-[35px]" alt="time-image" />
                </span>
                <h3>Secured & Safe Payments</h3>
                <p>By and large, credit cards are easily the most<br />secure and safe payment method to use when<br />you shop online. credit cards most secure.</p>
            </div>
            <div className="w-[350px] p-2 border-zinc-200 border-2">
                <span className="bg-green-300 p-3 rounded-md">
                    <img src={iconheadphones} className="w-[35px] h-[35px]" alt="time-image" />
                </span>
                <h3>24//7 Customer Support</h3>
                <p>The biggest benefit of offering 24/7 support<br />is that you provide a more convenient service<br />for your customers providing clock support.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOneCard
