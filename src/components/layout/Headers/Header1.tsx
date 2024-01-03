"use client";
import Link from "next/link";
import NavLinkHorizontal, { NavLink } from "../NavLink/NavLinkHorizontal";
import { RiHome2Line, RiUserLine, RiShoppingCartLine } from "react-icons/ri";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaAward, FaToolbox } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import ThemeContext from "@/contexts/themeContext";
import { useContext } from "react";

const Header1 = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const navLinks: NavLink[] = [
    { label: "Home", path: "/", icon: RiHome2Line },
    { label: "Certifications", path: "/certifications", icon: FaAward },
    { label: "Jobs", path: "/jobs", icon: FaToolbox },
    { label: "Exams", path: "/exams", icon: PiExamFill },
  ];
  return (
    <header>
      <nav className="container mx-auto bg-secondary flex items-center justify-between  py-5 px-10 w-screen m-0">
        <div className="logo">
          <Link href="/" className="text-xl font-bold ">
            <span className="text-tertiary-dark font-bold ">Josad</span>
          </Link>
        </div>
        <NavLinkHorizontal navLinks={navLinks} />
        <div className="flex items-center gap-4">
          {darkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem("josad-theme");
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem("josad-theme", "true");
              }}
            />
          )}
          <Link href={"/"}>
            <span className="btn-primary-sm "> Login</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header1;
