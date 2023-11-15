import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between bg-[#4E97D1] items-center relative">
      <img
        src="/logo-hunikita.png"
        alt="logo-hunikita"
        className="cursor-pointer"
      />
      <div className="relative">
        <ul className="flex text-white font-normal text-[20px] gap-4">
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Beranda
          </li>
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Tentang Kami
          </li>
          <li className="hover:text-gray-200 hover:cursor-pointer hover:underline">
            Pusat Bantuan
          </li>
        </ul>
      </div>
      <button className="hover:text-gray-200 hover:cursor-pointer hover:underline relative mr-5 p-1 pt-0 rounded-[5px] border-solid border-[3px] justify-center items-center text-white text-[20px] font-normal">
        Masuk
      </button>
    </div>
  );
};

export default Navbar;
