import Card from "./components/Card";
import Carousel from "./components/beranda/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TentangKami from "./Pages/tentang-kami/TentangKami";
import ArtikelPage from "./Pages/artikel/detail-artikel/ArtikelPage"
import ListArtikel from "./Pages/artikel/list-artikel/ListArtikel"
import ListKontrakan from "./Pages/kontrakan/list-kontrakan/ListKontrakan"
import Beranda from "./Pages/beranda/Beranda"
import Selengkapnya from "./components/beranda/Selengkapnya";
import { BrowserRouter  as Router, Routes, Route} from "react-router-dom";
import Login from "./Pages/autentikasi/Login";
import Register from "./Pages/autentikasi/Register";
import Change from "./Pages/autentikasi/Change";

function App() {
  return (
    <>
    <Beranda />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login/>} />
//         <Route path="/Register" element={<Register/>} />
//         <Route path="/Change" element={<Change/>} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;
