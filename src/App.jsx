import "./App.css";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </section>
    </>
  );
}

export default App;
