import React from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { selectNav, setNav } from "../features/navSlice";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "./Icons/Logo";
import Submenu from "./Submenu";
function Navbar() {
  const dispatch = useDispatch();
  const navbar = useSelector(selectNav);

  const handleNavbar = (nav_id) => {
    dispatch(setNav(nav_id));
  };

  return (
    <div className="bg-white z-12 border border-bottom-gray-100 top-0 sticky px-5 py-4 z-40">
      <div className="flex  items-center justify-between">
        <div className="navbar__left flex gap-12 flex-1">
          <a href="#">
            <Logo />
          </a>
          <nav className="hidden lg:block">
            <ul className="ml-12 flex gap-6 items-center">
              <li>
                <a
                  href="#"
                  className="font-bold text-sm"
                  onMouseOver={() => {
                    handleNavbar(1);
                  }}
                >
                  WOMEN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-sm"
                  onMouseOver={() => {
                    handleNavbar(2);
                  }}
                >
                  MEN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-sm"
                  onMouseOver={() => {
                    handleNavbar(3);
                  }}
                >
                  BAGS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold  text-sm"
                  onMouseOver={() => {
                    handleNavbar(4);
                  }}
                >
                  GIFTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-sm"
                  onMouseOver={() => {
                    handleNavbar(5);
                  }}
                >
                  LINEA ROSSA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-sm"
                  onMouseOver={() => {
                    handleNavbar(6);
                  }}
                >
                  PRADASPHERE
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__right flex items-center gap-3">
          <button>
            <GoSearch />
          </button>
          <button className="flex items-center justify-center lg:hidden">
            <BiMenuAltRight />
          </button>
        </div>
      </div>
      {navbar && <Submenu />}
    </div>
  );
}

export default Navbar;
