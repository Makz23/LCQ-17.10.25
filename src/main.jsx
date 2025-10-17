import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import A1 from "./components/A1";
import A2 from "./components/A2";
import A3 from "./components/A3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a1" element={<A1 />} />
        <Route path="/a2" element={<A2 />} />
        <Route path="/a3" element={<A3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
