import React from "react";

function index() {
  //   const handlePlay = () => {
  //     const video = document.querySelector("video");
  //     video.play();
  //   };

  //   const handlePause = () => {
  //     const video = document.querySelector("video");

  //     video.pause();
  //   };
  return (
    <div className="h-[668px] relative">
      <video
        src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/co_gifting/hero_v3/loop.mp4/_jcr_content/renditions/cq5dam.video.pradanux-large.1920.1080.mp4"
        loop
        autoPlay="autoplay"
        className="rounded absolute top-0 left-0 w-full h-full object-cover"
        muted
      ></video>
      <div className="video-banner-content text-center absolute top-[50%] left-[50%] z-12 text-white">
        <h1 className="text-3xl font-bold">Gifts</h1>
        <div className="mt-3 flex gap-2 items-center">
          <a href="#" className="">
            For Her
          </a>
          <a href="#">For Him</a>
        </div>
      </div>
    </div>
  );
}

export default index;
