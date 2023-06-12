import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";
import DetailPage from "./page/DetailPage";
import UserprofilPage from "./page/UserprofilPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ReservePage from "./page/ReservePage";

function App() {
  return (
    <>
      <div data-theme="light">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/profil" element={<UserprofilPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="reserve" element={<ReservePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
