import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { TentangKami } from "./pages/TentangKami";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
    </Router>
    {/* <Navbar />
    <Carousel />
    <Footer /> */}
    {/* <div className="flex gap-5">
    <Card />
    <Card />
    <Card />
    </div>
    <div className="flex gap-5">
    <Card />
    <Card />
    <Card />
    </div> */}
    </>
  );
}

export default App;
