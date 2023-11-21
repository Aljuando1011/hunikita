import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/beranda/Carousel";
import SearchBar from "../components/beranda/SearchBar";
import CardBeranda from "../components/beranda/CardBeranda";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <>
      <div>
        <div>
        <Navbar />
        </div>
        <div>
        <Carousel />
        </div>
        <div className="mt-[25px]">
          <SearchBar />
        </div>
        <div className="flex flex-col w-full mt-[60px]">
          <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
            Rekomendasi Kos
          </h1>
          <div className="flex gap-7 justify-center mt-[12px]">
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[60px]">
          <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
            Rekomendasi Kontrakan
          </h1>
          <div className="flex gap-7 justify-center mt-[12px]">
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[60px]">
          <h1 className="text-[32px] font-semibold uppercase ml-[30px]">
            Rekomendasi Artikel
          </h1>
          <div className="flex gap-7 justify-center mt-[12px]">
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
            <CardBeranda />
          </div>
        </div>
        <div className="mt-[98px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Beranda;
