import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [played, setPlayed] = React.useState(true);
  const handlePlay = () => {
    const video = document.querySelector("#gift");
    video.play();
    setPlayed(true);
  };

  const handlePause = () => {
    const video = document.querySelector("#gift");

    video.pause();
    setPlayed(false);
  };
  return (
    <div className="group my-6 h-[665px] relative flex items-center justify-center">
      <video
        src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/update_galleria/banner_bags_men/loop_DT.mp4/_jcr_content/renditions/cq5dam.video.pradanux-large.1920.1080.mp4"
        className="rounded absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        autoPlay="autoplay"
        loop
        muted="muted"
        id="gift"
      ></video>
      <div className="bag_content z-30 md:absolute md:top-[45%] md:left-12 text-center md:text-left">
        <h3 className="text-4xl md:text-8xl font-bold mt-0">Men`s Bag</h3>
        <a href="#" className="uppercase text-3xl">
          Discover
        </a>
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
