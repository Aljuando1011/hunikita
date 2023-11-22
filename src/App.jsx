import Login from "./Pages/autentikasi/Login";
import Register from "./Pages/autentikasi/Register"
import Listkosan from "./Pages/kosan/Listkosan";
import Detailkosan from "./Pages/kosan/Detailkosan";
import DropdownHover from "./components/penyewa/Dropdown";
import NavPenyewa from "./components/penyewa/NavPenyewa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/beranda/Beranda"
import TentangKami from "./Pages/tentang-kami/TentangKami"



// function App() {
//   return (
//     <>
//   <Listkosan/>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Detailkosan />} />
        {/* <Route path="/tentangkami" element={<TentangKami />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
