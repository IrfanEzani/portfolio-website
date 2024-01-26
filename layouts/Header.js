"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ dark }) => {
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const [pathname, setPathname] = useState("home");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="logo">
          <Link href="/">
            {/* <img src={`/images/logo${dark ? "-dark" : ""}.png`} alt="logo" /> */}
            IES
          </Link>
        </div>
        <div className="top-menu">
          <ul>
            <li className={pathname.includes("home") ? "active" : ""}>
              <Link href={`/`} className={`lnk`}>
                Home
              </Link>
            </li>
            <li className={pathname.includes("resume") ? "active" : ""}>
              <Link href={`resume${dark ? "-dark" : ""}`} className={`lnk`}>
                Portfolio
              </Link>
            </li>
            <li className={pathname.includes("project") ? "active" : ""}>
              <Link href={`project${dark ? "-dark" : ""}`} className="lnk">
                Projects
              </Link>
            </li>
            <li className={pathname.includes("thoughts") ? "active" : ""}>
              <Link href={`thoughts${dark ? "-dark" : ""}`} className="lnk">
                Thoughts
              </Link>
            </li>
            <li className={pathname.includes("contacts") ? "active" : ""}>
              <Link href={`contacts${dark ? "-dark" : ""}`} className="btn">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
