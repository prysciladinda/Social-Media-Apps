import Abiasa from "../assets/AbiAsa_gray.jpg";

import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sticky top-[122px] left-0 items-center w-[16rem] ml-auto">
      <img className="w-16 h-16" src={Abiasa} alt="abiasa_gray.png" />
      <div className="font-bold text-center mt-6 text-[16px]">
        <p>Group Project Sosmed</p>
        <p>@alterra_academy</p>
        <p className="font-normal mt-6">
          Copyright © 2022 | <br /> Tim FE_11 & BE_14
        </p>
        <p className="mt-5 italic text-[14px] font-normal border-zinc-500 border-b-2 pb-2 ">
          Social media @alterra_academy
        </p>
        <div className="flex justify-evenly mt-3">
          <FaInstagramSquare className="w-8 h-8" />
          <FaGoogle className="w-8 h-8" />
          <FaFacebookSquare className="w-8 h-8" />
          <FaLinkedin className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
