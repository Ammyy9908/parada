import React from "react";
import Container from "../Container";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaMapPin,
} from "react-icons/fa";

function index() {
  const footer = {
    top: {
      links: [
        {
          id: 1,
          title: "Company",
          uris: [
            { title: "Prada Group", href: "#" },
            { title: "Fondazione Prada", href: "#" },
            { title: "Luna Rossa", href: "#" },

            { title: "Sustainability", href: "#" },
            { title: "Work with us", href: "#" },
          ],
        },
        {
          id: 2,
          title: "Legal Terms & Conditions",
          uris: [
            { title: "Legal Notice", href: "#" },
            { title: "Privacy Policy", href: "#" },
            { title: "Cookie Policy", href: "#" },
            { title: "Sitemap", href: "#" },
          ],
        },
      ],
      social_links: [
        { title: "Facebook", href: "#", icon: <FaFacebookF /> },
        { title: "Instagram", href: "#", icon: <FaInstagram /> },
        { title: "Twitter", href: "#", icon: <FaTwitter /> },
        { title: "Youtube", href: "#", icon: <FaYoutube /> },
        { title: "Spotify", href: "#", icon: <FaSpotify /> },
      ],
    },
    middle: {
      title: "Store Locator",
      icon: <FaMapPin />,
      href: "#",
    },
    bottom: {
      copyright: "© 2021 Prada S.p.A. All rights reserved.",
      shipping: "Shipping to Rest of the World/English",
    },
  };
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="footer_top flex sm:flex-row flex-col gap-12 items-start justify-between">
          <div className="footer_top__left flex sm:flex-row flex-col items-start gap-12 sm:gap-32">
            <div className="footer_top__left__links">
              <p className="font-bold uppercase text-sm">
                {footer.top.links[0].title}
              </p>
              <ul className="mt-1">
                {footer.top.links[0].uris.map((uri) => {
                  return (
                    <li key={uri.id}>
                      <a
                        href={uri.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-gray-500"
                      >
                        {uri.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer_top__left__links">
              <p className="font-bold uppercase text-sm">
                {footer.top.links[1].title}
              </p>
              <ul className="mt-1">
                {footer.top.links[1].uris.map((uri) => {
                  return (
                    <li key={uri.id}>
                      <a
                        href={uri.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-gray-500"
                      >
                        {uri.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer_top__right">
            <div className="footer_top__right__links">
              <ul className="flex gap-3 items-center">
                {footer.top.social_links.map((uri) => {
                  return (
                    <li key={uri.id}>
                      <a href={uri.href} target="_blank" rel="noreferrer">
                        {uri.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_middle mt-6">
          <div className=" footer_middle__links flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{footer.middle.icon}</span>
              <span className="text-sm">{footer.middle.title}</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom w-full mt-6">
          <div className="footer__bottom__links flex sm:flex-row flex-col items-start sm:items-center gap-3 w-full justify-between">
            <p>
              <a href="#">
                <span className="text-sm">{footer.bottom.copyright}</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span className="text-sm">{footer.bottom.shipping}</span>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default index;
