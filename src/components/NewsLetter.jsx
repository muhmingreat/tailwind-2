import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          {" "}
          <h1
            className="md:text-4xl sm:text-3xl
           text-2xl font-bold py-2"
          >
            Want tips & trick to optimized your flow{" "}
          </h1>
          <p className=""> Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div
            className="flex flex-col sm:flex-row 
            items-center justify-between w-full"
          >
            <input
              className="p-3 flex w-full rounded-md text-black"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-[#00df92] w-[200px] 
          rounded-md font-medium my-6 mx-auto py-3 ml-34"
            >
              {" "}
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            We care for protection of your data read our<br/>
            <span className="text-[#00df9a] cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter