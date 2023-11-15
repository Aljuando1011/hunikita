import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#4E97D1] flex flex-col justify-between relative">
      <div className="flex justify-between relative mt-[33px]">
        <img
          src="/logo-hunikita.png"
          alt=""
          className="cursor-pointer"
        />
        <p className="w-[294px] text-white cursor-default mt-[5px]">
          huniKita merupakan sebuah situs yang dibuat untuk menyediakan
          kebutuhan akomodasi anda, berupa kos-kosan dan kontrakan.
        </p>
        <div className="flex gap-6">
          <div>
            <h1 className="text-[24px] text-white cursor-default">Navigasi</h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Beranda
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Tentang Kami
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] text-white cursor-default">
              Bantuan & Dukungan
            </h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Pusat Bantuan
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] text-white cursor-default">
              Hubungi Kami
            </h1>
            <ul>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                Jl. In aja dulu No. 101, Jawa Tengah 50174, Indonesia
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                (+62)89512439482 (Quick Response)
              </li>
              <li className="text-[16px] text-white hover:text-gray-200 hover:underline hover:cursor-pointer">
                hunikita@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-0 border-solid border-[3px] bg-white my-5"></div>
      <div className="flex justify-between relative px-5 mb-5">
        <p className="text-white text-[20px]">
          Copyright ©2023 All rights reserved | Web11Pro by Group 11
        </p>
        <div className="flex gap-3 cursor-pointer">
          <img src="/logo-facebook.svg" alt="" />
          <img src="/logo-instagram.svg" alt="" />
          <img src="/logo-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
