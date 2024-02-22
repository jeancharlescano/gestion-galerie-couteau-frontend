import React, { useEffect, useContext } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import logoNoBg from "../assets/img/logoNOBg.png";
import forging from "../assets/img/forging.jpeg";
import daozi from "../assets/img/knifes/machoir.jpg";
import chief from "../assets/img/knifes/chief.jpg";
import hache from "../assets/img/knifes/hache.jpg";
import { Link } from "react-router-dom";

import AuthContext from "../context/authContext";

const HomeScreen = () => {
  let { user } = useContext(AuthContext);
  console.log("🚀 ~ HomeScreen ~ user:", user);
  
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(
      "#knifes",
      {
        duration: 3000,
        reset: true,
      },
      100
    );
  }, []);

  return (
    <div>
      <div className="h-screen bg-fire-img bg-no-repeat bg-cover bg-main-black bg-center">
        <div className="absolute top-[15%] left-[50%] -translate-x-1/2 ">
          <p
            id="toto"
            className="font text-white font-medium text-7xl tracking-widest"
          >
            Coutellerie {user ? user.userEmail : null}
          </p>
          <div className="w-full h-full flex items-center justify-center">
            <img className="h-80" src={logoNoBg} alt="" />
          </div>
        </div>
        <div className="absolute bottom-5 flex items-center justify-center h-auto w-full">
          {/* <a href="#pres" onClick={(e) => scrollToSection(e, '#pres')} className="animate-bounce avatar "> */}
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
          <div className="w-96 h-96">
            <div className="flex h-1/2 ">
              <div
                id="knifes"
                className=" w-1/2 h-full mb-1 mr-1 overflow-hidden rounded-lg"
              >
                <img
                  className="w-full h-full object-contain"
                  src={daozi}
                  alt="daozi"
                />
              </div>
              <div
                id="knifes"
                className=" w-1/2 h-full mb-1 ml-1 overflow-hidden rounded-lg"
              >
                <img
                  className="w-full h-full object-contain"
                  src={chief}
                  alt="chief"
                />
              </div>
            </div>
            <div className="flex h-1/2">
              <div
                id="knifes"
                className=" w-1/2 h-full mt-1 mr-1 overflow-hidden rounded-lg"
              >
                <img
                  className="w-full h-full object-contain"
                  src={chief}
                  alt="daozi"
                />
              </div>
              <div
                id="knifes"
                className=" w-1/2 h-full mt-1 ml-1 overflow-hidden rounded-lg"
              >
                <img
                  className="w-full h-full object-contain"
                  src={hache}
                  alt="daozi"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[50%] pl-[10%] flex justify-evenly  flex-col items-center">
            <p className="text-right text-white text-xl font-semibold animate-slide-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              exercitationem rerum autem repudiandae nam alias amet facere iste.
              Cupiditate eos dignissimos cumque tempore, illo in deleniti fugit
              nesciunt quidem quasi!
            </p>
            <Link
              to="/gallery"
              className=" px-14 text-black font-medium text-md uppercase bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] rounded shadow-md hover:text-white hover:bg-transparent"
            >
              gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
