import Login from "./Pages/autentikasi/Login";
import Register from "./Pages/autentikasi/Register"
import Listkosan from "./Pages/kosan/Listkosan";
import Detailkosan from "./Pages/kosan/Detailkosan";
import DropdownHover from "./components/penyewa/Dropdown";
import NavPenyewa from "./components/penyewa/NavPenyewa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/beranda/Beranda"
import TentangKami from "./Pages/tentang-kami/TentangKami"
import PageKontrakan from "./Pages/kontrakan/detail-kontrakan/PageKontrakan";
import AddProduct from "./Pages/iklan/Addproduct";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda/>} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/berandapenyewa" element={<BerandaPenyewa />} />
        <Route path="/tentangkamipenyewa" element={<TentangKamiPenyewa />} />
        <Route path="/listkontrakanpenyewa" element={<ListKontrakanPenyewa />} />
        <Route path="/detailkontrakanpenyewa" element={<DetailKontrakanPenyewa />} />
        <Route path="/listartikelpenyewa" element={<ListArtikelPenyewa />} />
        <Route path="/detailartikelpenyewa" element={<DetailArtikelPenyewa />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
