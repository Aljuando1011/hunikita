import React from "react";
import Pagination from "../../components/artikel/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "../../components/list-kosan/Search";
// import Cardkosan from "../../components/list-kosan/Cardkosan";

const Listkosan = () => {
    return (
      <>
      <Navbar/>
          <div>
          <div>
            <Navbar />
          </div>
          <div className="mt-[25px] justify-center">
         <Search/>
          </div>
          <div className="flex flex-col w-full mt-[30px]">
            <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
                <Cardkosan/>
                <Cardkosan/>
                <Cardkosan/>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[30px]">
            <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan/>
            <Cardkosan/>
            <Cardkosan/>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[30px]">
            <div className="flex flex-wrap gap-7 justify-center mt-[12px]">
            <Cardkosan/>
            <Cardkosan/>
            <Cardkosan/>
            </div>
          </div>
          <div className="mt-[90px]">
            <Pagination />
          </div>
          <div className="mt-[98px]">
            <Footer />
          </div>
        </div>
      </>
    );
  }
  
  export default Listkosan;