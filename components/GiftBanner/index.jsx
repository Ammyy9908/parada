import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [played, setPlayed] = React.useState(true);
  const handlePlay = () => {
    const video = document.querySelector("video");
    video.play();
    setPlayed(true);
  };

  const handlePause = () => {
    const video = document.querySelector("video");

    video.pause();
    setPlayed(false);
  };
  return (
    <div className="rounded group h-[668px] relative bg-black/90">
      <video
        src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/co_gifting/hero_v3/loop.mp4/_jcr_content/renditions/cq5dam.video.pradanux-large.1920.1080.mp4"
        loop
        autoPlay="autoplay"
        className="rounded absolute top-0 left-0 w-full h-full object-cover"
        muted
      ></video>
      <div className="video-banner-content text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-12 text-white ">
        <h1 className="text-5xl font-bold">Gifts</h1>
        <div className="mt-3 flex gap-2 items-center">
          <a href="#" className="gift_btn font-bold">
            <span>For Her</span>
          </a>
          <a href="#" className="gift_btn font-bold">
            <span>For Him</span>
          </a>
        </div>
      </div>

      <button
        className="scale-0 group-hover:scale-110 transition-all flex absolute w-12 h-12 bg-white rounded-full  items-center justify-center bottom-5 right-5"
        onClick={played ? handlePause : handlePlay}
      >
        {!played ? <FaPlay /> : <FaPause />}
      </button>
    </div>
  );
}

export default index;
