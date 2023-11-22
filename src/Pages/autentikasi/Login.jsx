import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="w-full h-screen flex item-start">
        
        <div className='w-1/2 h-full bg-[#FFFFFF] flex flex-col p-5 justify-between font-Poppins'>

            <div className='bg-white w-full px-6'>
                <div className='w-full h-20'>
                <h1 className='text-sm text-gray-500 font-semibold'>Web11Pro</h1>
                <h1 className='text-xl md:text-2xl text-blue-500 font-bold leading-tight mt-8'>Login</h1>
                
                <p className="leading-tight mt-2 font-Poppins">Masukkan email dan sandi</p>

                    <form className="mt-9" action="#" method="POST">

                        <div>
                            <label className="font-semibold block text-gray-700">Email</label>
                            <input type="email" placeholder="Masukkan email" className="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg" autoComplete autofocus required/>
                        </div>

                        <div className="mt-2">
                            <label className="font-semibold block text-gray-700">Sandi</label>
                            <input type="password" minLength="10" placeholder="Masukkan sandi" className="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg" required/>
                        </div>

                        <div class="text-right mt-2">
                            <a href="#" className="font-Poppins font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none"><Link to="/Change">Lupa Kata Sandi?</Link></a>
                        </div>
                        
                       
                        <button className="w-full block bg-blue-500 hover:bg-blue-400 px-1.5 py-1.5 mt-2 rounded-lg font-semibold text-white font-Poppins focus:bg-blue-400 focus:outline-none mt-3" type="submit"><Link to="/Beranda">Masuk</Link></button>
                        
                        <hr className ="my-6 border-gray-300 w-full"/>

                        <button className="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg border mt-4">
                            <div className="flex items-center justify-center">
                                <img src="/logo-google.png" className="w-10 h-10 flex-items-center justify-center" viewBox="0 0 48 48" />
                                <p className="ml-2">Masuk dengan Google</p>
                            </div>
                        </button>

                        <p className="flex justify-center items-center mt-4 ">
                            Belum punya akun?
                            <p className="active"><a href="Register.jsx" className="text-blue-500 hover:text-blue-700 font-semibold gap-2"><Link to="/Register">Buat Akun</Link></a>
                            </p>
                        </p>

                        <div className="mt-6">
                            <div className="flex items-center justify-center flex gap-1">
                                Dengan login kamu menyetujui
                                <a href="#" className="text-blue-500 hover:text-blue-700">  Syarat & Ketentuan </a>
                                <a href="#"> dan</a>
                            </div>
                            <div className="flex items-center justify-center flex gap-1">
                                <a href="#" className="text-blue-500 hover:text-blue-700"> Kebijakan Privasi</a>
                                <a href="#"> huniKita</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className='relative w-1/2 h-full flex flex-col bg-white'>
            <img src="/Login.png" className="w-full h-full" />
        </div>

    </div>
);
};

export default Login;