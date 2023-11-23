import React from 'react'
import NavPenyewa from '../../components/penyewa/NavPenyewa'
import FooterPenyewa from '../../components/penyewa/FooterPenyewa'

const TentangKamiPenyewa = () => {
  return (
    <>
    <NavPenyewa />
    <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1440px] h-[791px] relative">
          <div className="absolute w-[328px] top-[29px] left-[178px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[35px] tracking-[0] leading-[normal]">
            Tentang huniKita
          </div>
          <p className="absolute w-[771px] top-[108px] left-[178px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-black text-[18px] text-justify tracking-[0.54px] leading-[25px]">
            Selamat datang di platform penyewaan kost dan kontrakan tempat di mana kenyamanan bertemu dengan kemudahan,
            Kami menghubungkan pencari tempat tinggal dengan pemilik properti yang menyediakan kost dan kontrakan
            berkualitas. Dengan antarmuka yang ramah pengguna, HuniKita memudahkan Anda menemukan tempat tinggal ideal
            sesuai kebutuhan dan budget. Cari kost dengan fasilitas lengkap atau kontrakan yang nyaman untuk keluarga
            Anda, semuanya ada di sini.
          </p>
          <img
            className="absolute w-[363px] h-[207px] top-[50px] left-[949px] object-cover"
            alt="Hunikita logo"
            src="/hunikita-logo-3.png"
          />
          <div className="left-[178px] absolute w-[332px] h-[328px] top-[375px]">
            <div className="relative w-[328px] h-[328px] bg-white rounded-[25px] shadow-[0px_2px_5px_2px_#00000040] hover:cursor-pointer hover:bg-slate-100 hover:shadow-[0px_5px_11px_5px_#00000040]">
              <div className="absolute w-[186px] top-[17px] left-[64px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal]">
                Pencarian Kos/Kontrakan
              </div>
              <p className="absolute w-[255px] top-[184px] left-[36px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[14px] text-justify tracking-[0] leading-[normal]">
                Temukan properti sesuai preferensi Anda dengan fitur pencarian pintar kami. Tentukan lokasi, fasilitas,
                dan budget, dan kami akan menyajikan pilihan yang cocok.
              </p>
              <img
                className="absolute w-[255px] h-[87px] top-[77px] left-[36px]"
                alt="Rectangle"
                src="/pencarian-kos-kontrakan.svg"
              />
            </div>
          </div>
          <div className="left-[934px] absolute w-[332px] h-[328px] top-[375px]">
            <div className="relative w-[328px] h-[328px] bg-white rounded-[25px] shadow-[0px_2px_5px_2px_#00000040] hover:cursor-pointer hover:bg-slate-100 hover:shadow-[0px_5px_11px_5px_#00000040]">
              <div className="absolute w-[77px] top-[29px] left-[125px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
                Artikel
              </div>
              <p className="absolute w-[255px] top-[184px] left-[36px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[14px] text-justify tracking-[0] leading-[normal]">
                Temukan properti sesuai preferensi Anda dengan fitur pencarian pintar kami. Tentukan lokasi, fasilitas,
                dan budget, dan kami akan menyajikan pilihan yang cocok.
              </p>
              <img
                className="absolute w-[255px] h-[87px] top-[77px] left-[36px]"
                alt="Rectangle"
                src="/artikel-tentang-kami.svg"
              />
            </div>
          </div>
          <div className="left-[556px] absolute w-[332px] h-[328px] top-[375px]">
            <div className="relative w-[328px] h-[328px] bg-white rounded-[25px] shadow-[0px_2px_5px_2px_#00000040] hover:cursor-pointer hover:bg-slate-100 hover:shadow-[0px_5px_11px_5px_#00000040]">
              <div className="absolute w-[255px] h-[148px] top-[17px] left-[36px]">
                <div className="absolute w-[233px] top-0 left-[12px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal]">
                  Pasang Iklan Kos/Kontrakan
                </div>
                <img className="absolute w-[255px] h-[87px] top-[60px] left-0" alt="Rectangle" src="/pasang-iklan-kos-kontrakan.svg" />
              </div>
              <p className="absolute w-[255px] top-[184px] left-[36px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[14px] text-justify tracking-[0] leading-[normal]">
                Temukan properti sesuai preferensi Anda dengan fitur pencarian pintar kami. Tentukan lokasi, fasilitas,
                dan budget, dan kami akan menyajikan pilihan yang cocok.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterPenyewa />
    </>
  )
}

export default TentangKamiPenyewa