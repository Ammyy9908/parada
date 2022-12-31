/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Container from "../../../components/Container";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
function EssentialCard({ image, title, secondaryImage }) {
  return (
    <div className="party-essential-card">
      <div className="h-[377px] cursor-pointer">
        <img
          src={image}
          alt={title}
          onMouseOver={(e) => {
            e.target.src = secondaryImage;
          }}
          onMouseOut={(e) => {
            e.target.src = image;
          }}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-6 font-semibold text-sm">{title}</p>
    </div>
  );
}

function index() {
  return (
    <div>
      <Navbar />
      <div className="sticky top-12 z-50 bg-white">
        <Container>
          <div className="women-navbar flex flex-col sm:flex-row items-center gap-12">
            <h3 className="text-2xl font-bold uppercase">Gifts For Him</h3>
            <nav>
              <ul className="flex gap-6 items-center text-sm font-bold">
                <li>
                  <Link href="/">View All</Link>
                </li>
                <li>
                  <Link href="/">Party Essentials</Link>
                </li>
                <li>
                  <Link href="/">New Formal</Link>
                </li>
                <li>
                  <Link href="/">Soft Feel</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div className="relative women-gift-banner w-full h-[475px]">
        <img
          src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/man/hero/hero_free_DT.jpg"
          className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
          alt="Men-Gifts"
        />
      </div>

      <div className="max-w-[90%] lg:max-w-[1024px]  women-gift-section-text px-8 sm:px-16 lg:px-32 py-16 text-center mx-auto">
        <h3 className="text-md font-bold">
          Find the perfect gift for men from Prada`s exclusive selections.
        </h3>
        <p className="text-sm mt-3">
          Modern tailoring, relaxed sportswear-inspired garments, and designs
          made of luxurious yarns with soft textures: explore the three
          selections of gift ideas for him that recall the most special moments
          of the holiday season.
        </p>
      </div>

      <Container>
        <div className="party_essentials">
          <div className="party-essential-columns grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="party-essential-model-section relative">
              <img
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/man/mosaic_v3/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.2560.2560.webp"
                alt="party-essentials-model"
                className="w-full h-[768px] object-cover"
              />
              <div className="party-essential-content absolute z-12 top-10  flex items-start justify-between w-full px-3">
                <h2 className="text-3xl font-bold">Party Essentials</h2>
                <a href="#" className="discover_btn_black font-bold">
                  <span>Discover</span>
                </a>
              </div>
            </div>
            <div className="party-essential-bag-section w-full h-[768px]">
              <video
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/man/mosaic_v3/loop.mp4/_jcr_content/renditions/cq5dam.video.pradanux-large.1920.1080.mp4"
                loop
                autoPlay
                muted
                className="h-full w-full object-cover"
              ></video>
            </div>
          </div>
          <div className="party-essentials-grid my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EssentialCard
              image={
                "https://www.prada.com/content/dam/pradabkg_products/P/P3I/P3I76R/12CRF0056/P3I76R_12CR_F0056_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Embroidered rhinestone mesh dress"
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/U/UPS/UPS590/12DGF0002/UPS590_12DG_F0002_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
            />
            <EssentialCard
              image={
                "https://www.prada.com/content/dam/pradabkg_products/1/1F0/1F036N/3AU1F0522/1F036N_3AU1_F0522_F_010_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Metallic leather ballerinas"
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/U/UCN/UCN467/1XV2F0009/UCN467_1XV2_F0009_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
            />
            <EssentialCard
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/2/2DE/2DE127/3D30F0632/2DE127_3D30_F0632_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Prada Cleo satin bag with crystals"
              image="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC169/2AWLF0522/1BC169_2AWL_F0522_V_HOO_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
            />
            <EssentialCard
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH069/ZO6F0002/2VH069_ZO6_F0002_V_ZMI_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Cardholder with shoulder strap and crystals"
              image={
                "https://www.prada.com/content/dam/pradabkg_products/1/1MR/1MR024/2AWLF0522/1MR024_2AWL_F0522_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
              }
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default index;
