import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const linkContainerRef = useRef(null);
  const linkListRef = useRef(null);

  useEffect(() => {
    const linkListHeight = linkListRef.current.getBoundingClientRect().height;
    if (show) {
      linkContainerRef.current.style.height = `${linkListHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [show]);
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand"></div>
        <button className="btn nav-toggler" onClick={() => setShow(!show)}>
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div
        className={`${show ? "links-container show" : "links-container"}`}
        ref={linkContainerRef}
      >
        <ul className="nav-links linknav" ref={linkListRef}>
          {links.map((el) => (
            <li key={el.id}>
              <a href={el.url} alt={el.text}>
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
