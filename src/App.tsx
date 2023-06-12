import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";
import DetailPage from "./page/DetailPage";

function App() {


  return (

    <>
    <div data-theme="light">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
