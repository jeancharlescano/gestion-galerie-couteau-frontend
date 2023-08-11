import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import DetailKnife from "../screens/DetailKnife";
import AddKnife from "../screens/AddKnife";
import ServiceScreen from "../screens/ServiceScreen";
import ContactScreen from "../screens/ContactScreen";
import LoginScreen from "../screens/LoginScreen";

const main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={HomeScreen} />
        <Route path="/gallery" element={GalleryScreen}/>
        <Route path="/gallery/:id" element={DetailKnife} />
        <Route path="/knife/add" element={AddKnife} />
        <Route path="/service" element={ServiceScreen} />
        <Route path="/contact" element={ContactScreen} />
        <Route path="/login" element={LoginScreen} />
      </Routes>
    </div>
  );
};

export default main;
