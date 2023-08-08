import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Gallery from "./screens/GalleryScreen";
import Service from "./screens/ServiceScreen";
import Contact from "./screens/ContactScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact Component={HomeScreen} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
