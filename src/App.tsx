import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ReservePage from "./page/ReservePage";
import TripPage from "./page/TripPages";

const App = () => {
  return (
    <>
      <div data-theme="light">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="reserve" element={<ReservePage />} />
            <Route path="trip" element={<TripPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
