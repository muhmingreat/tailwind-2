import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div
      className="w-full py-[10rem] px-4 
    bg-white"
    >
      <div
        className="max-w-[1240px] 
        mx-auto grid md:grid-cols-3 gap-8"
      >
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            src={Single}
            alt="/"
            className="w-20
            mx-auto mt-[-3rem] bg-white "
          />
          <h2
            className="text-2xl font-bold text-center
            py-8 "
          >
            Single Users
          </h2>
          <p className="text-center text-4xl font-bold ">$140</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8">Granted users</p>
            <p className="py-2 border-b mx-8">Send up to 2gb</p>
          </div>
          <button
            className="bg-black text-[#00df92] w-[200px] 
          rounded-md font-medium my-6 mx-auto py-3"
          >
            {" "}
            Start trial{" "}
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4  rounded-lg md:my-0 my-8 hover:scale-105 duration-500">
          <img
            src={Double}
            alt="/"
            className="w-20
            mx-auto mt-[-3rem] bg-white "
          />
          <h2
            className="text-2xl font-bold text-center
            py-8 "
          >
            Double Users
          </h2>
          <p className="text-center text-4xl font-bold ">$140</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8">Granted users</p>
            <p className="py-2 border-b mx-8">Send up to 2gb</p>
          </div>
          <button
            className="bg-[#00df92] w-[200px] 
          rounded-md font-medium my-6 mx-auto py-3"
          >
            {" "}
            Start Trail{" "}
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            src={Triple}
            alt="/"
            className="w-20
            mx-auto mt-[-3rem] bg-white "
          />
          <h2
            className="text-2xl font-bold text-center
            py-8 "
          >
            Triple Users
          </h2>
          <p className="text-center text-4xl font-bold ">$140</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 gb Storage</p>
            <p className="py-2 border-b mx-8">Granted users</p>
            <p className="py-2 border-b mx-8">Send up to 2gb</p>
          </div>
          <button
            className="bg-black text-[#00df92] w-[200px] 
          rounded-md font-medium my-6 mx-auto py-3"
          >
            {" "}
            Start Trail{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards