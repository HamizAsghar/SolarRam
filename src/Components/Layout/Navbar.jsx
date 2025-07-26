import React from "react";
import styles from "../../Styles/Style";
import { navItems } from "../../Static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex" key={index}>
            <Link
              to={item.url}
              className={`${
                active === index + 1
                  ? "text-[#3b82f6]" // Light blue for active
                  : "text-gray-700 800px:text-gray-200" // Neutral for inactive
              } 
              font-medium px-6 cursor-pointer mb-8 800px:mb-0 transition duration-300 hover:text-[#60a5fa]`}>
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
