import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
console.log("main.jsx: React application booting");
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
