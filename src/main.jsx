import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import A1 from "./components/A1";
import A2 from "./components/A2";
import A3 from "./components/A3";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
          <nav>
        <ul>
          <li>
            <Link to="/">Ogólnie</Link>
          </li>
          <li>
            <Link to="/a2">Wykształcenie</Link>
          </li>
          <li>
            <Link to="/a3">Umiejętności</Link>
          </li>
          <li>
            <Link to="/a1">Doświadczenie Zawodowe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/a1" element={<A1/>} />
        <Route path="/a2" element={<A2/>} />
        <Route path="/a3" element={<A3/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
