import React from "react";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const links = [
  {
    id: 1,
    url: "#home",
    text: "home",
  },
  {
    id: 2,
    url: "#agenda",
    text: "Agenda",
  },
  {
    id: 3,
    url: "#material",
    text: "Material",
  },
];

const socialLinks = [
  {
    id: 1,
    url: "https://youtube.com",
    icon: <FaYoutube className="icon" />,
  },
  {
    id: 2,
    url: "https://twitter.com",
    icon: <FaTwitter className="icon" />,
  },
  {
    id: 3,
    url: "https://facebook.com",
    icon: <FaFacebook className="icon" />,
  },
  
];

const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} alt="social">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { links, SocialBar };
