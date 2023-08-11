import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = ({ activeNav }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallery", to: "/gallery" },
    { label: "Service", to: "/service" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="h-14 bg-main-black flex">
      <div className="w-1/3 flex justify-center items-center">Logo</div>
      <nav className="w-2/3 flex justify-center items-center">
        <div className="w-full h-full">
          <ul className="flex content-center items-center justify-between w-full h-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`relative hover:border-b-2 hover:border-gold ${
                  activeNav === index ? "active" : ""
                }`}
              >
                <Link
                  to={item.to}
                  className="text-white font-semibold text-xl"
                  aria-current="page"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-1/3 flex justify-end items-center pr-8">
        <FontAwesomeIcon
          icon={faUser}
          className="h-10 w-10  cursor-pointer text-white hover:text-gold"
          onClick={() => navigate("/login")}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Header;
