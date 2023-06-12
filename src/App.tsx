import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";

function App() {


  return (

    <>
    <div data-theme="light">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
