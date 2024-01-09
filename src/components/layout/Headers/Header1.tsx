"use client";
import Link from "next/link";
import NavLinkHorizontal, { NavLink } from "../NavLink/NavLinkHorizontal";
import { RiHome2Line, RiUserLine, RiShoppingCartLine } from "react-icons/ri";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaAward, FaToolbox } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import ThemeContext from "@/contexts/themeContext";
import { use, useContext } from "react";
import Image from "next/image";

const Header1 = () => {
  const {
    isLoading,
    user,
  } = useKindeBrowserClient();
  let avator;
  if (user) {
    avator = user.picture;
    // console.log(user);
  }
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const navLinks: NavLink[] = [
    { label: "Home", path: "/", icon: RiHome2Line },
    { label: "Certifications", path: "/certifications", icon: FaAward },
    { label: "Jobs", path: "/jobs", icon: FaToolbox },
    { label: "Exams", path: "/exams", icon: PiExamFill },
  ];
  return (
    <header>
      <nav className=" mx-auto bg-secondary flex items-center justify-between  py-5 px-3 md:px-20 w-screen m-0">
        <div className="logo">
          <Link href="/" className="text-xl font-bold ">
            <span className="text-tertiary-dark font-bold ">Josad</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <NavLinkHorizontal navLinks={navLinks} />
        </div>
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
          {/* <Link href={"/"}>
            <span className="btn-primary-sm "> Login</span>
          </Link> */}
          <div className="flex gap-2">
            {!user ? (
              <LoginLink className="btn-primary-sm">Login</LoginLink>
            ) :

              (
                <div className="flex items-center gap-3">
                  {
                    !user.email ? null : <span>{user.given_name}</span>
                    // !user.picture ? <RiUserLine /> : <Image src={`${avator}`} alt="test" width={50} height={50} />
                    // avator ? <Image src={`${avator}`} alt="test" width={50} height={50} /> : null
                  }
                  < LogoutLink className=" py-1 px-3 bg-gray-700 text-white rounded ">Log out</LogoutLink>
                </div>
              )}
          </div>
        </div>
      </nav>
    </header >
  );
};
export default Header1;
