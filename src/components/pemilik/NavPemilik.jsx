import React from 'react'

const NavPemilik = () => {
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
            <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">Iklan</li>
        </ul>
        <button className=" hover:cursor-pointer hover:underline relative mr-5 p-1 pt-0 rounded-[50px] text-[#4E97D1] bg-white justify-center items-center text-[20px] font-normal w-[100px]">
        Logout
      </button>
    </nav>
  )
}

export default NavPemilik