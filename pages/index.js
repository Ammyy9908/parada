/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import GiftBanner from "../components/GiftBanner";
import Collection from "../components/Collection";
import GalleryBanner from "../components/GalleryBanner";
import BagsContainer from "../components/BagsContainer";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectNav } from "../features/navSlice";
import HolidaySlider from "../components/HolidaySlider";

export default function Home() {
  const navbar = useSelector(selectNav);

  console.log("NAVBAR", navbar);
  return (
    <div>
      <Head>
        <title>Parada</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <GiftBanner />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Collection>
            <div className="collection-header absolute top-12 w-full px-12 z-30 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start justify-between">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold m-none group-hover:text-white">
                Holiday Collection Women
              </h2>

              <a
                href="#"
                className="discover_btn_black uppercase px-2 py-1 bg-white w-[110px] font-bold h-[32px] flex items-center justify-center"
              >
                <span>Discover</span>
              </a>
            </div>
            <img
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/holiday/mosaic_holiday_3/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp"
              alt="holiday women collection banner"
              className="rounded absolute object-cover group-hover:scale-110 transition-all w-full h-full"
            />
            <div className="gradient w-full h-full z-10 absolute group-hover:bg-orange-300/50 transition-all duration-300"></div>
          </Collection>
          <Collection>
            <div className="collection-header absolute top-12 w-full px-12 z-30 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start justify-between">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold m-none group-hover:text-white">
                Holiday Collection Men
              </h2>

              <a
                href="#"
                className="discover_btn_black uppercase  py-1 bg-white w-[110px] font-bold h-[32px] flex items-center justify-center"
              >
                <span>Discover</span>
              </a>
            </div>
            <img
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/holiday/mosaic_holiday_3/Card_2_DT.jpg/_jcr_content/renditions/cq5dam.web.3328.3328.webp"
              alt="Holiday Collection Men"
              className="rounded absolute object-cover group-hover:scale-110 transition-all w-full h-full"
            />
            <div className="gradient w-full h-full z-10 absolute group-hover:bg-black/50 transition-all duration-300"></div>
          </Collection>
        </div>
        <GalleryBanner />
        <BagsContainer />
        <HolidaySlider />
      </Container>
      <Footer />
    </div>
  );
}
