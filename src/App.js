import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Gallery from "./screens/GalleryScreen";
import DetailKnife from "./screens/DetailKnife";
import Service from "./screens/ServiceScreen";
import Contact from "./screens/ContactScreen";
import AddKnife from "./screens/AddKnife";

function App() {
  const checkUrl = () => {
    if (window.location.href.includes("gallery")) {
      return 1;
    }
    if (window.location.href.includes("service")) {
      return 2;
    }
    if (window.location.href.includes("contact")) {
      return 3;
    } else {
      return 0;
    }
  };

  return (
    <BrowserRouter>
      <Header activeNav={checkUrl()} />
      <Routes>
        <Route path="/" exact Component={HomeScreen} />
        <Route path="/gallery" Component={Gallery}></Route>
        <Route path="/gallery/:id" Component={DetailKnife} />
        <Route path="/knife/add" Component={AddKnife} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
