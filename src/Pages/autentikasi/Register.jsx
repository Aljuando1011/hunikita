import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex item-start">
      <div className="w-1/2 h-full bg-[#FFFFFF] flex flex-col p-5 justify-between font-Poppins">
        <div className="bg-white w-full px-6">
          <div className="w-full h-full">
            <h1 className="text-xl md:text-2xl text-blue-500 font-bold leading-tight mt-2">
              Daftar
            </h1>

            <form className="mt-9" action="#" method="POST">
              <div>
                <label className="font-semibold block text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
                  autoComplete
                  autofocus
                  required
                />
              </div>

              <div class="mt-2">
                <label className="font-semibold block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  minLength="10"
                  placeholder="Masukkan email"
                  className="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
                  autoComplete
                  autofocus
                  required
                />
              </div>

              <div className="mt-2">
                <label className="font-semibold block text-gray-700">
                  Sandi
                </label>
                <input
                  type="password"
                  minLength="10"
                  placeholder="Masukkan sandi"
                  className="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg"
                  autoComplete
                  autofocus
                  required
                />
              </div>

              <Link to="/berandapenyewa">
                <button
                  className="w-full block bg-blue-500 hover:bg-blue-400 px-1.5 py-1.5 mt-5 rounded-lg font-semibold text-white font-Poppins focus:bg-blue-400 focus:outline-none"
                  type="submit"
                >
                  Daftar
                </button>
              </Link>

              <div className="mt-6">
                <div className="flex items-center justify-center gap-1">
                  Dengan login kamu menyetujui
                  <Link to="/syaratketentuan">
                    <a className="text-blue-500 hover:text-blue-700">
                      {" "}
                      Syarat & Ketentuan{" "}
                    </a>
                  </Link>
                  <p> dan</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Link to="/kebijakanprivasi">
                    <a className="text-blue-500 hover:text-blue-700">
                      {" "}
                      Kebijakan Privasi
                    </a>
                  </Link>
                  <p> huniKita</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative w-1/2 h-full flex flex-col bg-white">
        <img src="/Login.png" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Register;
