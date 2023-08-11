import React from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import DetailKnife from "./screens/DetailKnife";
import AddKnife from "./screens/AddKnife";
import ServiceScreen from "./screens/ServiceScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/gallery/:id" element={<DetailKnife />} />
        <Route path="/knife/add" element={<AddKnife />} />
        <Route path="/service" element={<ServiceScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
