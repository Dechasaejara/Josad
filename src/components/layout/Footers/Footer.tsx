import Link from "next/link";
import {
  BsFillSendFill,
  BsGithub,
  BsTelegram,
  BsTelephoneOutbound,
} from "react-icons/bs";
import { BiLogoGmail, BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-slate-800 text-gray-300 p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-16 items-center justify-around">
          <div className="flex md:text-left flex-col justify-between">
            <h4 className="font-semibold text-[30px] py-6">Contact</h4>
            <hr className="text-white mb-2 w-full" />
            <div className="flex items-center py-4 ">
              <BsTelegram />
              <Link href={"/"} className="ml-2">
                @josad/me
              </Link>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <Link href={"/"} className="ml-2">
                09-11-12-34-56
              </Link>
            </div>
            <div className="flex items-center pt-4">
              <BiLogoGmail />
              <Link href={"/"} className="ml-2">
                josad@gmail.com
              </Link>
            </div>
            <div className="flex items-center pt-4">
              <BsGithub />
              <Link href={"/"} className="ml-2">
                josad@github.com
              </Link>
            </div>
          </div>

          <div className="flex md:text-left flex-col justify-between">
            <h4 className="font-semibold text-[30px] py-6">About</h4>
            <hr className="text-white mb-2 w-full" />
            <Link href={"/story"} className="pb-4 scale-animation">
              Our Story
            </Link>
            <Link href={"/newsletter"} className="pb-4 scale-animation">
              Get in Touch
            </Link>
            <Link href={"/privacy"} className="pb-4 scale-animation">
              Our Privacy Commitment
            </Link>
            <Link href={"/terms"} className="pb-4 scale-animation">
              Terms of service
            </Link>
          </div>

          <div className="flex md:text-left flex-col justify-between">
            <h4 className="font-semibold text-[30px] py-6">Services</h4>
            <hr className="text-white mb-2 w-full" />
            <Link href={"/certifications"} className="pb-4 scale-animation">
              Certification
            </Link>
            <Link href={"/sheat-sheets"} className="pb-4 scale-animation">
              Cheat Sheet
            </Link>
            <Link href={"/excercies"} className="pb-4 scale-animation">
              Excercies
            </Link>
            <Link href={"/resume-builder"} className="pb-4 scale-animation">
              Resume Builder
            </Link>
          </div>
        </div>
        <div className="container mx-auto py-4 text-center">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-tertiary-dark font-bold">Josad</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
