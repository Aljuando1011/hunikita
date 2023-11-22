import React from 'react'
import DropdownHover from './Dropdown'

const NavPenyewa = () => {
  return (
    <nav className="w-full flex justify-between bg-[#4E97D1] items-center">
        <div>
            <img src="/logo-hunikita.png" alt="" />
        </div>
        <ul className='flex text-white font-normal text-[20px] gap-7'>
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Beranda</li>
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Tentang kami</li>
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Pusat bantuan</li>
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Artikel</li>
            <li><DropdownHover /></li>
        </ul>
        <button className="hover:text-gray-200 hover:cursor-pointer hover:underline relative mr-5 p-1 pt-0 rounded-[5px] border-solid border-[3px] justify-center items-center text-white text-[20px] font-normal">Logout</button>
    </nav>
  )
}

export default NavPenyewa