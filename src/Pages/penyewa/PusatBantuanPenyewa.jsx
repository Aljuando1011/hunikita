import React from "react";
import NavPenyewa from "../../components/penyewa/NavPenyewa";
import FooterPenyewa from "../../components/penyewa/FooterPenyewa";

const PusatBantuanPenyewa = () => {
  return (
    <>
      <NavPenyewa />
      <p className="absolute w-[655px] top-[150px] left-[35px] [font-family:'Poppins-Regular',Helvetica] font-bold text-[#000000cc] text-[30px] text-justify tracking-[0] leading-[normal]">
        Ajukan Pertanyaan!
      </p>
      <div className="w-[650px] mt-[120px]  ml-[35px]">
        Nama Lengkap
        <input
          minLength="10"
          placeholder="     Masukkan Nama lengkap Anda"
          className="w-full bg-gray-200  h-[40px] border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Email
        <input
          minLength="10"
          type="email"
          placeholder="  Masukkan Email Anda"
          className="w-full bg-gray-200  h-[40px] border-none focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Tentang
        <input
          minLength="10"
          placeholder="     Masukkan Subjek "
          className="w-full bg-gray-200  h-[40px] border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>

      <div className="w-[650px] mt-[20px]  ml-[35px]">
        Pesan
        <input
          placeholder="     Masukkan Masalah Anda"
          minLength="10"
          className="w-full bg-gray-200 h-[40px] mb-[40px] border-none focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
          autoComplete
          autofocus
        />
      </div>
      <p className="absolute w-[655px] top-[155px] left-[750px] [font-family:'Poppins-Regular',Helvetica] font-bold text-[#000000cc] text-[30px] text-justify tracking-[0] leading-[normal]">
        Pertanyaan yang sering diajukan
      </p>
      <div className="relative ml-[750px] w-[460px] top-[-430px] ">
        <ul class="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Cara terhidar dari penipuan?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Apa Itu huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Bagaimana cara memebuat iklan di huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex  gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-2 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Bagaimana cara menyewa di huni kita?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
      <div className="mt-[-200px]">
        <FooterPenyewa />
      </div>
    </>
  );
};

export default PusatBantuanPenyewa;