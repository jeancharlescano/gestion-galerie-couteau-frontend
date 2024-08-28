import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import AuthContext from "../context/authContext";
import logoNoBg from "../assets/img/logo/Logo V2.png";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = ({ activeNav }) => {
  const navigate = useNavigate();
  let { user, logoutUser } = useContext(AuthContext);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallerie", to: "/gallery" },
    { label: "Service", to: "/service" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="w-full h-20 bg-transparent flex">
      <div className="w-1/3 flex items-center pl-8">
        <img className="object-fill max-h-20" src={logoNoBg} alt="logo" />
      </div>
      <nav className="w-2/3 flex justify-center items-center">
        <div className="w-full h-full">
          <ul className="flex content-center items-center justify-between w-full h-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`relative hover:border-b-2 hover:border-gold  ${
                  activeNav === index ? "border-b-2 border-gold" : ""
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
        {user ? (
          <FontAwesomeIcon
            className="h-8 w-h-8  cursor-pointer text-white hover:text-gold"
            icon={faArrowRightFromBracket}
            onClick={logoutUser}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="h-8 w-h-8  cursor-pointer text-white hover:text-gold"
            onClick={() => navigate("/login")}
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  );
};

export default Header;
