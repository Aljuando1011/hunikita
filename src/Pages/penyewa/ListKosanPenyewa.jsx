import React from "react";
import NavPenyewa from "../../components/penyewa/NavPenyewa";
import FooterPenyewa from "../../components/penyewa/FooterPenyewa";
import Search from "../../components/list-kosan/Search";
import Cardkosan1 from "../../components/list-kosan/Cardkosan1";
import Cardkosan2 from "../../components/list-kosan/Cardkosan2";
import Cardkosan3 from "../../components/list-kosan/Cardkosan3";
import Cardkosan4 from "../../components/list-kosan/Cardkosan4";
import Cardkosan5 from "../../components/list-kosan/Cardkosan5";
import Cardkosan6 from "../../components/list-kosan/Cardkosan6";
import Cardkosan7 from "../../components/list-kosan/Cardkosan7";
import Cardkosan8 from "../../components/list-kosan/Cardkosan8";
import Cardkosan9 from "../../components/list-kosan/Cardkosan9";
import Pagination from "../../components/artikel/Pagination";
import { Link } from "react-router-dom";

const ListKosanPenyewa = () => {
  return (
    <>
      <NavPenyewa />
      <div className="mt-[25px] justify-center">
        <Search />
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
          <Link to="/detailkosanpenyewa">
          <Cardkosan1/>
          </Link>
          <Cardkosan2/>
          <Cardkosan3/>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
        <Cardkosan4/>
        <Cardkosan5/>
        <Cardkosan6/>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[30px]">
        <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
        <Cardkosan7/>
        <Cardkosan8/>
        <Cardkosan9/>
        </div>
      </div>
      <div className="mt-[90px]">
        <Pagination />
      </div>
      <div className="mt-[98px]">
        <FooterPenyewa />
      </div>
    </>
  );
};

export default ListKosanPenyewa;
