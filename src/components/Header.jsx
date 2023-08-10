import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({activeNav}) => {
  const [activeNavItem, setActiveNavItem] = useState(activeNav);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

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
                  activeNavItem === index ? "active" : ""
                }`}
                onClick={() => handleNavItemClick(index)}
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
      <div className="w-1/3 flex justify-end  items-center">
        <p className=" m-8">toto</p>
      </div>
    </div>
  );
};

export default Header;
