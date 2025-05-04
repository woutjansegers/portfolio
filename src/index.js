import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./App"; // jouw huidige homepage component
import ProjectDetail from "./pages/projectDetail"; // detailcomponent dat je aanmaakt

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>
);
