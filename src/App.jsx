import Login from "./Pages/autentikasi/Login";
import Register from "./Pages/autentikasi/Register"
import DropdownHover from "./components/penyewa/Dropdown";
import NavPenyewa from "./components/penyewa/NavPenyewa";

function App() {
  return (
    <>
    <NavPenyewa />
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
