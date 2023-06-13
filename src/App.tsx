import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";
import DetailPage from "./page/DetailPage";
import UserprofilPage from "./page/UserprofilPage";
import Navbar from "./component/Navbar";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ReservePage from "./page/ReservePage";
import TripPage from "./page/TripPages";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <>
    <div data-theme="light">
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/profil" element={<UserprofilPage />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/trip" element={<TripPage />} />
        </Routes>
      </BrowserRouter>
      </CookiesProvider>
    </div>
    </>
  );
}

export default App;
