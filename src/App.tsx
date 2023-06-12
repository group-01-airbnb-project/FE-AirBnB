import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";
import UserprofilPage from "./page/UserprofilPage";
import Navbar from "./component/Navbar";

function App() {


  return (

    <>
    <div data-theme="light">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/profil" element={<UserprofilPage />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
