import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import PrivateRoute from "./utilities/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import DetailKnife from "./screens/DetailKnife";
import AddKnife from "./screens/AddKnife";
import ServiceScreen from "./screens/ServiceScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
