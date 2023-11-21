import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[686px] h-[51px] flex items-center relative rounded-[10px] shadow-xl mx-auto'>
        <img src="/logo-map.png" alt="" className='ml-[9px]' />
        <form action="">
            <input type="text" placeholder='Ketikan kata kunci...' className='border-none w-[527px] pl-[14px] ml-[7px]' />
        </form>
        <button className='w-[93px] h-[31px] bg-[#4E97D1] flex justify-center absolute right-[13px] items-center text-white text-[18px] rounded-[8px]'>Cari Kos</button>
    </div>
  )
}

export default SearchBar