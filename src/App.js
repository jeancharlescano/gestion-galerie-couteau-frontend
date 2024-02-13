import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./utilities/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import DetailKnife from "./screens/DetailKnife";
import AddKnife from "./screens/AddKnife";
import ServiceScreen from "./screens/ServiceScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/gallery/:id" element={<DetailKnife />} />
        <Route path="/knife" element={<PrivateRoute />}>
          <Route path="/knife/add" element={<AddKnife />} />
        </Route>
        <Route path="/service" element={<ServiceScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
