import React from 'react'
import NavPenyewa from '../../components/penyewa/NavPenyewa'
import FooterPenyewa from '../../components/penyewa/FooterPenyewa'
import ListCard from '../../components/artikel/ListCard'
import SearchArtikel from '../../components/artikel/SearchArtikel'
import Pagination from '../../components/artikel/Pagination'

const ListArtikelPenyewa = () => {
  return (
    <>
    <NavPenyewa />
    <div className="mt-[43px] ml-[96px] flex">
          <ul className='flex gap-9 text-[#4E97D1] text-["Poppins"] font-bold underline text-[25px]'>
            <li className="cursor-pointer">Gaya Hidup</li>
            <li className="cursor-pointer">Kecantikan</li>
            <li className="cursor-pointer">Wisata</li>
            <li className="cursor-pointer">Kuliner</li>
          </ul>
          <div className="ml-[300px]">
          <SearchArtikel />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-[40px]">
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
        <div className="mt-[99px]">
            <Pagination />
        </div>
        <div className='mt-[77px]'><FooterPenyewa /></div>
    </>
  )
}

export default ListArtikelPenyewa