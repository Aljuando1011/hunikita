import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/beranda/Beranda"
import TentangKami from "./Pages/tentang-kami/TentangKami"
import BerandaPenyewa from "./Pages/penyewa/BerandaPenyewa";
import TentangKamiPenyewa from "./Pages/penyewa/TentangKamiPenyewa";
import ListKontrakanPenyewa from "./Pages/penyewa/ListKontrakanPenyewa";
import DetailKontrakanPenyewa from "./Pages/penyewa/DetailKontrakanPenyewa";
import ListArtikelPenyewa from "./Pages/penyewa/ListArtikelPenyewa";
import DetailArtikelPenyewa from "./Pages/penyewa/DetailArtikelPenyewa";

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
