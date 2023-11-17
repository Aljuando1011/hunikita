import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    {/* <Navbar />
    <Carousel />
    <Footer /> */}
    <div className="flex gap-5">
    <Card />
    <Card />
    <Card />
    </div>
    <div className="flex gap-5">
    <Card />
    <Card />
    <Card />
    </div>
    </>
  );
}

export default App;
