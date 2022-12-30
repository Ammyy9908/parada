/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function index() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/10/banner_pradasphere/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "Holiday 2022",
    },
    {
      id: 2,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/10/update_pradasphere_ss23/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "SS 2022 Womenswear",
    },
    {
      id: 3,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/pradasphere/1_update/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "FW22 Women",
    },
    {
      id: 4,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/pradasphere/2/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "FW22 Men",
    },
    {
      id: 5,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/05/co_27/pradasphere/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "The Symbole",
    },
    {
      id: 6,
      image:
        "https://www.prada.com/content/dam/pradanux/home_page/2022/03/co_02/WW/pradasphere/pradasphere_home_DT.jpg/_jcr_content/renditions/cq5dam.web.1932.1932.webp",
      title: "FW 2022 Womenswear",
    },
  ];

  const handleIncrement = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const handleDecrement = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  return (
    <div className="w-full h-[768px] bg-black my-6 relative">
      <h1 className="absolute text-white text-5xl rotate-90 top-[50%] -left-32 font-bold">
        Pradasphere News
      </h1>
      <div className="slider_main w-[75%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="slider_body">
          <img src={slides[currentSlide].image} alt="" />
        </div>
        <div className="slider_footer text-white mt-12 flex items-center justify-between">
          <h1 className="text-5xl font-bold">{slides[currentSlide].title}</h1>

          <div className="slider_conntrols flex gap-3 items-center">
            <button
              className={`group w-10 h-10  rounded-full  flex items-center justify-center relative ${
                currentSlide === 0 && "text-white/50"
              }`}
              onClick={handleDecrement}
            >
              <span className="absolute group-hover:-translate-x-2 transition-all">
                <AiOutlineArrowLeft />
              </span>
            </button>
            <button
              className="group w-10 h-10  rounded-full  flex items-center justify-center relative"
              onClick={handleIncrement}
            >
              <span className="absolute group-hover:translate-x-2 transition-all">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
