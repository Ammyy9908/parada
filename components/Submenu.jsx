import React from "react";
import { useDispatch } from "react-redux";
import { setNav } from "../features/navSlice";
import { IoMdClose } from "react-icons/io";
function MenuOptions({ title, list }) {
  return (
    <div className="menu-options flex flex-col items-start gap-2">
      <h3 className="font-bold uppercase">{title}</h3>
      <ul className="flex flex-col gap-3">
        {list.map((item, i) => (
          <li key={i} className="text-sm text-gray-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Submenu() {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute top-[55px] left-0 w-full"
      onMouseLeave={() => {
        dispatch(setNav(null));
      }}
      tabIndex={0}
    >
      <div className="submenu__data   z-15 bg-white h-[350px]">
        <button
          className="absolute right-10 top-0 w-8 h-8 hover:bg-gray-200 flex items-center justify-center rounded-full"
          onClick={() => {
            dispatch(setNav(null));
          }}
        >
          <IoMdClose />
        </button>
        <div className="women_list flex items-start h-full ">
          <div className="menu-highlights  bg-gray-100 h-full w-[250px] px-6 py-3">
            <MenuOptions
              title="Highlights"
              list={[
                "New in",
                "Gifts",
                "Holiday Collection",
                "Fall winter 2022",
                "Paradoxe",
              ]}
            />
          </div>
          <div className="submenu_list grid grid-cols-5 py-3 px-6">
            <MenuOptions
              title="Ready to wear"
              list={[
                "Outerwear",
                "Jackets",
                "Kinitwear",
                "Dress",
                "Short and tops",
                "Skirts",
                "Trousers and shorts",
              ]}
            />
            <MenuOptions
              title="Bags"
              list={[
                "Shoulder bags",
                "Top handles",
                "Hobo bags",
                "Dress",
                "Topes",
                "Mini bags",
                "Briefcases",
              ]}
            />
            <MenuOptions
              title="Shoes"
              list={[
                "Loafers",
                "Ankle boots and boots",
                "Lace-ups",
                "Pumps and ballerinas",
                "Sneakers",
                "Slipers and mules",
                "Sandals",
              ]}
            />
            <MenuOptions
              title="Accessories"
              list={[
                "Wallets and Card Holders",
                "High tech Accessories and Keychains",
                "Hats and gloves",
                "Headbands and Hair Accessories",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submenu;
