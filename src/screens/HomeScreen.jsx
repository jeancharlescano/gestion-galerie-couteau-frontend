import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./HomeScreen.css";

import logoNoBg from "../assets/img/logoNOBg.png";
import forging from "../assets/img/forging.jpeg";

const HomeScreen = () => {
  return (
    <div>
      <div className="h-screen bg-fire-img bg-no-repeat bg-cover bg-main-black bg-center">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2">
          <p className="font text-white font-medium text-7xl tracking-widest">
            Coutellerie Tony
          </p>
          <img src={logoNoBg} alt="" />
        </div>
        <div className="absolute bottom-5 flex items-center justify-center h-auto w-full">
          <a href="#pres" className="animate-bounce avatar ">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="h-8 w-8 mt-[15px] ml-[15px] text-white"
            ></FontAwesomeIcon>
          </a>
        </div>
        {/* <div className="animate-bounce absolute top-[95%] left-[50%] -translate-x-1/2 w-24 h-24 rounded-full border-2 flex items-center justify-center cursor-pointer">
          <p className=" text-white">Découvrir</p>
        </div> */}
      </div>
      <div
        id="pres"
        className=" flex items-center px-[10%] py-[5%] h-screen bg-main-black"
      >
        <div className="flex items-center justify-between h-full w-full">
          <p className="w-1/2 pr-[10%] text-white text-xl font-semibold animate-slide-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            exercitationem rerum autem repudiandae nam alias amet facere iste.
            Cupiditate eos dignissimos cumque tempore, illo in deleniti fugit
            nesciunt quidem quasi!
          </p>
          <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] rounded-full flex items-center justify-center opacity-0 anim-delay animate-slide-top">
            <div className="h-96 w-96 rounded-full flex justify-center items-center overflow-hidden ">
              <img src={forging} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="gallery"
        className="flex items-center px-[15%] py-[5%] h-screen bg-main-black-lighter"
      >
        <div className="flex items-center justify-between h-full w-full">
          <div className="w-1/2 h-3/4 ">
            <div className="flex h-1/2">
              <div className=" w-1/2 h-full ">{/* img ici */}</div>
              <div className=" w-1/2 h-full ">{/* img ici */}</div>
            </div>
            <div className="h-1/2">
              <div className=" w-1/2 h-full ">{/* img ici */}</div>
              <div className=" w-1/2 h-full ">{/* img ici */}</div>
            </div>
          </div>
          <p className="w-1/2 pl-[10%] text-right text-white text-xl font-semibold animate-slide-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            exercitationem rerum autem repudiandae nam alias amet facere iste.
            Cupiditate eos dignissimos cumque tempore, illo in deleniti fugit
            nesciunt quidem quasi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
