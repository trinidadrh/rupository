import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Show from "./components/Show";
import Wild from "./components/Wild";
import Mood from "./components/Mood";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/wild" element={<Wild />} />
        <Route path="/mood" element={<Mood />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
