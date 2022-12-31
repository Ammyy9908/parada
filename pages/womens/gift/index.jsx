/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Container from "../../../components/Container";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
function EssentialCard({ image, title, secondaryImage }) {
  return (
    <div className="party-essential-card">
      <div
        className="h-[377px] cursor-pointer transition-all duration-700"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundImage = `url(${secondaryImage})`;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundImage = `url(${image})`;
        }}
      ></div>
      <p className="mt-6 font-semibold text-sm">{title}</p>
    </div>
  );
}

function index() {
  return (
    <div>
      <Navbar />
      <div>
        <Container>
          <div className="women-navbar flex sm:flex-row flex-col items-start sm:items-center gap-12">
            <h3 className="text-2xl font-bold uppercase">Gifts For Her</h3>
            <nav>
              <ul className="flex sm:flex-row flex-col gap-6 items-start sm:items-center text-sm font-bold">
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
      <div className="relative women-gift-banner w-full h-[375px] sm:h-[475px]">
        <video
          src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/hero/loop_DT.mp4"
          loop
          autoPlay
          muted
          className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
        ></video>
      </div>

      <div className="max-w-[90%] lg:max-w-[1024px]  women-gift-section-text px-8 sm:px-16 lg:px-32 py-16 text-center mx-auto">
        <h3 className="text-md font-bold">
          Find the perfect gift for women from Prada`s exclusive selections.
        </h3>
        <p className="text-sm mt-3">
          From sparkling crystal embellishments to designs that reinterpret
          classic formal style and garments and accessories with warm, soft
          textures: explore the three selections of gift ideas for her that
          recall the most special moments of the holiday season
        </p>
      </div>

      <Container>
        <div className="party_essentials">
          <div className="party-essential-columns grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="party-essential-model-section relative">
              <img
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/mosaic_v2/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.2560.2560.webp"
                alt="party-essentials-model"
                className="w-full h-[375px] sm:h-[768px] object-cover"
              />
              <div className="party-essential-content absolute z-12 top-10  flex items-start justify-between w-full px-3">
                <h2 className="sm:text-3xl font-bold uppercase">
                  Party Essentials
                </h2>
                <a href="#" className="discover_btn_black font-bold w-[130px]">
                  <span>Discover</span>
                </a>
              </div>
            </div>
            <div className="party-essential-bag-section w-full h-[365px] sm:h-[768px]">
              <video
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/mosaic_v2/loop.mp4/_jcr_content/renditions/cq5dam.video.pradanux-large.1920.1080.mp4"
                loop
                autoPlay
                muted
                className="h-full w-full object-cover"
              ></video>
            </div>
          </div>
          <div className="party-essentials-grid my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EssentialCard
              image={
                "https://www.prada.com/content/dam/pradabkg_products/P/P3I/P3I76R/12CRF0056/P3I76R_12CR_F0056_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Embroidered rhinestone mesh dress"
              secondaryImage={
                "https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/mosaic_v2/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.2560.2560.webp"
              }
            />
            <EssentialCard
              image={
                "https://www.prada.com/content/dam/pradabkg_products/1/1F0/1F036N/3AU1F0522/1F036N_3AU1_F0522_F_010_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Metallic leather ballerinas"
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/1/1F0/1F036N/3AU1F0522/1F036N_3AU1_F0522_F_010_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
            />
            <EssentialCard
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC169/2AWLF0522/1BC169_2AWL_F0522_V_HOO_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Prada Cleo satin bag with crystals"
              image="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC169/2AWLF0522/1BC169_2AWL_F0522_V_HOO_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
            />
            <EssentialCard
              secondaryImage={
                "https://www.prada.com/content/dam/pradabkg_products/1/1MR/1MR024/2AWLF0522/1MR024_2AWL_F0522_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
              }
              title="Cardholder with shoulder strap and crystals"
              image={
                "https://www.prada.com/content/dam/pradabkg_products/1/1MR/1MR024/2AWLF0522/1MR024_2AWL_F0522_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
              }
            />
          </div>
        </div>
        <section className="my-32">
          <div className="section-header flex items-center justify-center">
            <h3 className="text-center">
              <a href="#" className="discover_btn_black w-64 uppercase">
                <span> Discover Party Essentials</span>
              </a>
            </h3>
          </div>

          <div className="section-rows grid lg:grid-cols-2  my-12 gap-6">
            <div className="grid-big relative w-full  h-[1068px]">
              <div
                className="grid-big-content absolute  top-10 flex items-start justify-between w-full px-12"
                style={{ zIndex: 12 }}
              >
                <h1 className="font-bold text-5xl">New Formal</h1>
                <a href="#" className="discover_btn_black w-32">
                  <span>Discover</span>
                </a>
              </div>
              <video
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/editorial_1_v4/loop.mp4"
                className="absolute top-0 left-0 bottom-0 right-0  w-full h-full object-cover"
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div className="grid-gallery grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/P/P3I/P3I67R/12BZF0967/P3I67R_12BZ_F0967_S_231_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
                title="Emroidered lace and polin mini dress"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/P/P3I/P3I67R/12BZF0967/P3I67R_12BZ_F0967_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC204/NZVF0522/1BC204_NZV_F0522_V_JOU_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
                title="Saffiano leather mini bag"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC204/NZVF0522/1BC204_NZV_F0522_V_JOU_MDL.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1D2/1D246M/3AU1F0522/1D246M_3AU1_F0522_F_B050_SLS.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
                title="Metallic leather loafers"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1D2/1D246M/3AU1F0522/1D246M_3AU1_F0522_F_B050_SLR.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1IF/1IF104/2CK7F0056/1IF104_2CK7_F0056_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
                title="Metal hair clips"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1IF/1IF104/2CK7F0056/1IF104_2CK7_F0056_MDL.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg"
                }
              />
            </div>
          </div>
        </section>
        <section className="my-32">
          <div className="section-header flex items-center justify-center">
            <h3 className="text-center">
              <a href="#" className="discover_btn_black w-64 uppercase">
                <span> Discover New Formal</span>
              </a>
            </h3>
          </div>

          <div className="section-rows grid lg:grid-cols-2  my-12 gap-6">
            <div className="grid-big relative w-full  h-[1068px]">
              <div
                className="grid-big-content absolute  top-10 flex items-start justify-between w-full px-12"
                style={{ zIndex: 12 }}
              >
                <h1 className="font-bold text-5xl">New Formal</h1>
                <a href="#" className="discover_btn_black w-32">
                  <span>Discover</span>
                </a>
              </div>
              <img
                src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/11/gifting/landing/woman/provvisoria_soft-feel_3/2x2_DT.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp"
                className="absolute top-0 left-0 bottom-0 right-0  w-full h-full object-cover"
                alt="New Formal Model"
              ></img>
            </div>
            <div className="grid-gallery grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1HC/1HC137/2EC9F0591/1HC137_2EC9_F0591_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
                title="Shearling bucket hat"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1HC/1HC137/2EC9F0591/1HC137_2EC9_F0591_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/2/201/20114/12CWF0480/20114_12CW_F0480_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
                title="Cashmere and wool sweater with top"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/2/201/20114/12CWF0480/20114_12CW_F0480_S_231_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1ZH/1ZH150/2EC9F0591/1ZH150_2EC9_F0591_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
                title="Shearling cover for iPhone 13 Pro Max"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1ZH/1ZH150/2EC9F0591/1ZH150_2EC9_F0591_SLD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
              />
              <EssentialCard
                image={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA906/2ECYF0009/1BA906_2ECY_F0009_V_EOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
                title="Prada Galleria shearling mini-bag"
                secondaryImage={
                  "https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA906/2ECYF0009/1BA906_2ECY_F0009_V_EOM_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp"
                }
              />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default index;
