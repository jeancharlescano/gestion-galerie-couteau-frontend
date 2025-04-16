import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import {
  faBars,
  faXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import AuthContext from "../context/authContext";
import logoNoBg from "../assets/img/logo/Logo V2.png";

const Header = ({ activeNav }) => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallerie", to: "/gallery" },
    { label: "Service", to: "/service" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="max-h-20 w-full bg-[#232c33] text-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <Link to="/">
          <img src={logoNoBg} alt="Logo" className="h-18 md:h-16" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-48">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`relative text-lg font-medium py-1 
              ${
                activeNav === index
                  ? "border-b-2 border-gold text-white"
                  : "hover:border-b-2 hover:border-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User icon / login-logout */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="h-8 w-8 cursor-pointer hover:text-[#db2b39]"
              onClick={logoutUser}
            />
          ) : (
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl cursor-pointer hover:text-[#db2b39]"
              onClick={() => navigate("/login")}
            />
          )}
        </div>

        {/* Burger menu icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`relative text-lg font-medium py-1 
              ${
                activeNav === index
                  ? "border-b-2 border-gold text-white"
                  : "hover:border-b-2 hover:border-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div>
            {user ? (
              <button
                onClick={() => {
                  logoutUser();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-[#db2b39] mt-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-2"
                />
                Déconnexion
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-[#db2b39] mt-2"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Connexion
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
