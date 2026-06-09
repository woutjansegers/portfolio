import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./App"; // jouw huidige homepage component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Portfolio />
    </BrowserRouter>
);
