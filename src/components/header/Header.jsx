import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const SearchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header
      className={`header fixed transform translate-y-0 w-full h-[60px] flex items-center transition-all ease duration-500 ${
        mobileMenu ? "mobileView" : ""
      } ${show}`}
    >
      <ContentWrapper className="md:justyify-center">
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="" className="h-[50px]" />
        </div>
        <ul className="menuItems list-style-list-none  items-center absolute top-[60px]  left-0 flex-col  w-full py-[20px]  border-t border-solid border-white border-opacity-10 bg-[#020c1b] md:bg-transparent  md:flex md:relative md:top-0 md:flex-row md:py-[0px]  md:w-auto hidden md:flex">
          <li
            className="menuItem text-[20px] md:text-[16px] w-full md:w-auto h-auto md:h-[60px] py-[15px] px-[20px] md:py-0 px-[15px] flex flex-col md:flex-row items-start md:items-center text-white md:m-[0 15px] font-medium text-white"
            onClick={() => navigationHandler("movie")}
          >
            Movies
          </li>
          <li
            className="menuItem text-[20px] md:text-[16px] w-full md:w-auto h-auto md:h-[60px] py-[15px] px-[20px] md:py-0 px-[15px] flex flex-col md:flex-row items-start md:items-center text-white md:m-[0 15px] font-medium text-white"
            onClick={() => navigationHandler("Tv")}
          >
            TV
          </li>
          <li className="menuItem text-[20px] md:text-[16px] w-full md:w-auto h-auto md:h-[60px] py-[15px] px-[20px] md:py-0 px-0 flex flex-col md:flex-row items-start md:items-center text-white md:m-[0 15px] font-medium ">
            <HiOutlineSearch onClick={openSearch} className="hidden md:flex" />
          </li>
        </ul>
        <div className="mobileMenuItems md:hidden flex items-center gap-[20px]">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar w-full h-[60px] bg-white absolute top-[60px] ">
          <ContentWrapper>
            <div className="searchInput flex items-center w-[100%] h-[40px] mt-[10px] justify-between">
              <input
                className="w-full 
              h-[50px] bg-white outline-none border-none rounded-l-[30px] py-0 px-[15px] text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:py-0 px-[30px] text-[#000] md:h-[60px]"
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={SearchQueryHandler}
              />
              <VscChromeClose
                onClick={() => setShowSearch(false)}
                className="text-[20px] shrink-0 ml-[10px] cursor-pointer text-black"
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
