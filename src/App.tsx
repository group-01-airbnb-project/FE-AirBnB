import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./page/homePage";
import DetailPage from "./page/DetailPage";
import UserprofilPage from "./page/UserprofilPage";
import Navbar from "./component/Navbar";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ReservePage from "./page/ReservePage";
import TripPage from "./page/TripPages";
import {useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies();
    return (
    <>
    <div data-theme={cookies.toggle === "true"? "dark" : "light"}>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/profil" element={<UserprofilPage />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/trip" element={<TripPage />} />
        </Routes>
      </BrowserRouter>
     
    </div>
    </>
  );
}

export default App;
