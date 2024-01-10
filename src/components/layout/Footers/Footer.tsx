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
    <footer className="relative bottom-0 mt-16 bg-slate-800 p-10 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-around gap-16">
          <div className="flex flex-col justify-between md:text-left">
            <h4 className="py-6 text-[30px] font-semibold">Contact</h4>
            <hr className="mb-2 w-full text-white" />
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

          <div className="flex flex-col justify-between md:text-left">
            <h4 className="py-6 text-[30px] font-semibold">About</h4>
            <hr className="mb-2 w-full text-white" />
            <Link href={"/story"} className="scale-animation pb-4">
              Our Story
            </Link>
            <Link href={"/newsletter"} className="scale-animation pb-4">
              Get in Touch
            </Link>
            <Link href={"/privacy"} className="scale-animation pb-4">
              Our Privacy Commitment
            </Link>
            <Link href={"/terms"} className="scale-animation pb-4">
              Terms of service
            </Link>
          </div>

          <div className="flex flex-col justify-between md:text-left">
            <h4 className="py-6 text-[30px] font-semibold">Services</h4>
            <hr className="mb-2 w-full text-white" />
            <Link href={"/certifications"} className="scale-animation pb-4">
              Certification
            </Link>
            <Link href={"/sheat-sheets"} className="scale-animation pb-4">
              Cheat Sheet
            </Link>
            <Link href={"/excercies"} className="scale-animation pb-4">
              Excercies
            </Link>
            <Link href={"/resume-builder"} className="scale-animation pb-4">
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
