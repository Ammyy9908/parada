import React from "react";
import { GoSearch } from "react-icons/go";
import Logo from "./Icons/Logo";
function Navbar() {
  return (
    <div className="bg-white z-12 border border-bottom-gray-100 top-0 sticky px-5 py-4 flex  items-center justify-between z-40">
      <div className="navbar__left flex gap-12 flex-1">
        <a href="#">
          <Logo />
        </a>
        <nav className="hidden lg:block">
          <ul className="ml-12 flex gap-6 items-center">
            <li>
              <a href="#" className="font-bold text-sm">
                WOMEN
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-sm">
                MEN
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-sm">
                BAGS
              </a>
            </li>
            <li>
              <a href="#" className="font-bold  text-sm">
                GIFTS
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-sm">
                LINEA ROSSA
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-sm">
                PRADASPHERE
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar__right">
        <GoSearch />
      </div>
    </div>
  );
}

export default Navbar;
