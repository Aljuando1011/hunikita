import Card from "./components/Card";
import Carousel from "./components/beranda/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListKontrakan from "./kontrakan/list-kontrakan/ListKontrakan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/list-kontrakan" element={<ListKontrakan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
