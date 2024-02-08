import React from "react";
import "./HomeScreen.css";

import logoNoBg from "../assets/img/logoNOBg.png"


const HomeScreen = () => {
  return (
    <div>
      <div className="h-screen bg-fire-img bg-no-repeat bg-cover bg-main-black bg-center">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2">
          <p className="font text-white font-medium text-7xl tracking-widest">Coutellerie Tony</p>
          <img src={logoNoBg} alt="" />
        </div>
        <div className="absolute bottom-0 flex items-center justify-center h-auto w-full">
          <a href="#toto" className="animate-bounce w-24 h-24 rounded-full border-2 flex items-center justify-center cursor-pointer border-white">
            <p className="text-white">Découvrir</p>
          </a>
        </div>
        {/* <div className="animate-bounce absolute top-[95%] left-[50%] -translate-x-1/2 w-24 h-24 rounded-full border-2 flex items-center justify-center cursor-pointer">
          <p className=" text-white">Découvrir</p>
        </div> */}
      </div>
      <div id="toto" className="h-screen bg-main-black">
        
      </div>
    </div>
  );
};

export default HomeScreen;
