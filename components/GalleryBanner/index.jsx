/* eslint-disable @next/next/no-img-element */
import React from "react";

function index() {
  return (
    <div className="mt-6 relative">
      <img
        src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/update_galleria/banner_galleria_v4/banner_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp"
        alt="gallery-banner-image"
        className="rounded"
      />
      <div className="gallery-content absolute z-12 top-5 left-5 text-white">
        <h2 className="text-2xl">Prada Galleria</h2>
        <a href="#" className="uppercase text-5xl">
          Discover More
        </a>
      </div>
    </div>
  );
}

export default index;
