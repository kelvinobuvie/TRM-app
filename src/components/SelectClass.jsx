import React from 'react'

const SelectClass = () => {
  return (
    <div className='mt-7 grid gap-2 lg:flex'>
        <button className="border-2 rounded-md border-gray-400 py-2 active:border-orange-400 hover:text-orange-400 active:text-orange-400 hover:border-orange-400 px-5 text-gray-400 font-bold text-sm flex items-center gap-1 ">
            <input type="radio" /> Individual
        </button>
        <button className="border-2 rounded-md border-gray-400 py-2 px-5  active:border-orange-400 hover:text-orange-400 active:text-orange-400 hover:border-orange-400 text-gray-400 font-bold text-sm flex items-center gap-1">
            <input type="radio" className=''/> Corperate
        </button>
        <button className="border-2 rounded-md border-gray-400 py-2 px-5  active:border-orange-400 hover:text-orange-400 active:text-orange-400 hover:border-orange-400 text-gray-400 font-bold text-sm flex items-center gap-1">
            <input type="radio" /> Third Party
        </button>
    </div>
  )
}

export default SelectClass