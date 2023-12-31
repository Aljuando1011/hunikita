import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex item-start">
      <div className="w-1/2 h-full bg-[#FFFFFF] flex flex-col p-5 justify-between font-Poppins">
        <div className="bg-white w-full px-6">
          <div className="w-full h-20">
            <h1 className="text-xl md:text-2xl text-blue-500 font-bold leading-tight mt-8">
              Login
            </h1>

            <form className="mt-9" action="#" method="POST">
              <div>
                <label className="font-semibold block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
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
                  required
                />
              </div>

              <Link to="/berandapemilik">
                <button
                  className="w-full block bg-blue-500 hover:bg-blue-400 px-1.5 py-1.5 rounded-lg font-semibold text-white font-Poppins focus:bg-blue-400 focus:outline-none mt-3"
                  type="submit"
                >
                  Masuk
                </button>
              </Link>

              <div className="flex gap-2 justify-center mt-[10px]">
                <p>Belum punya akun?</p>
                <Link to="/register">
                  <p className="text-blue-500">Buat akun</p>
                </Link>
              </div>

              <div className="mt-6">
                <div className=" items-center justify-center flex gap-1">
                  Dengan login kamu menyetujui
                  <Link to="/syaratketentuan">
                    <a className="text-blue-500 hover:text-blue-700">
                      {" "}
                      Syarat & Ketentuan{" "}
                    </a>
                  </Link>
                  <p> dan</p>
                </div>
                <div className=" items-center justify-center flex gap-1">
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

export default Login;
