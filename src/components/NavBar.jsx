import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrolled = scrollTop > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => setToggle(!toggle);
  return (
    <div
      className={`pt-3 pb-3 flex justify-between items-center w-full sticky top-0 z-20 ${
        isScrolled || toggle ? "bg-black bg-opacity-30 text-white" : ""
      }`}
    >
      <Link
        href={"/"}
        className="inline-flex items-center pl-9 gap-[14px] relative"
      >
        <img
          className="relative w-[40px] h-[40px] rounded-full"
          alt="Group"
          src="AI_Logo.png"
        />
        <div
          className={`relative w-fit [font-family:'Inter-Bold',Helvetica] lg:hidden font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap ${
            isScrolled || toggle ? "text-white" : ""
        }`}
        >
          INIT.AI
        </div>
      </Link>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <div className="px-1 text-md">
          <Link className="px-4" to="/">
            Home
          </Link>
          <Link className="px-4" to="/blogs">
            Blog
          </Link>
          <Link className="px-4" to="/team">
            Team
          </Link>
          <Link className="px-4" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="lg:hidden z-40 m-4" onClick={handleClick}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul
        className={
          toggle
            ? `mt-20 pb-8 absolute top-6  bg-black bg-opacity-30 text-white shadow-sm z-20 w-full px-8 lg:hidden flex flex-col items-center gap-3 `
            : "hidden"
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
