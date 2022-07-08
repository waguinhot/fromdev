import "./assets/css/style.css";
import Index from "./4dev/Index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./4dev/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
