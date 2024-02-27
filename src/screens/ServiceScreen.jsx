import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight, faScroll } from "@fortawesome/free-solid-svg-icons";

const ServiceScreen = () => {
  return (
    <>
      <Header activeNav={2} />
      <div className="h-[calc(100vh-80px)] flex items-center justify-evenly">
        <div className="w-96 h-96 p-16 shadow-2xl flex flex-col justify-between">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/af7e39/small-axe.png"
            alt="small-axe"
          />
          <h2 className="font-extrabold text-xl text-white">Hache</h2>
          <p className="text-white">
            Nous proposons des haches de lancer, des hachettes, mais aussi des
            manches
          </p>
          <Link className="text-gold font-bold hover:underline" to="/contact">
            Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="w-96 h-96 p-16 shadow-2xl flex flex-col justify-between bg-gradient-to-b from-[#AF7E39] to-[#fdbc60]">
          <img
            className="w-16 h-16"
            src="https://img.icons8.com/material-outlined/48/232C33/knife.png"
            alt="knife"
          />
          <h2 className="font-extrabold text-xl text-[#fff]">Couteau</h2>
          <p className="text-main-black font-medium">
            Allant du couteau de lancer au bushcraft, nous saurons répondre à
            vos besoin
          </p>
          <Link className="text-white font-bold hover:underline" to="/contact">
            Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="w-96 h-96 p-16 shadow-2xl flex flex-col justify-between">
          <FontAwesomeIcon className="w-12 h-12 text-gold" icon={faScroll} />
          <h2 className="font-extrabold text-xl text-white">Conseil</h2>
          <p className="text-white ">
            Nous pouvons répondre à vos questions concernant la fabrication de
            couteau
          </p>
          <Link className="text-gold font-bold hover:underline" to="/contact">
            Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceScreen;
