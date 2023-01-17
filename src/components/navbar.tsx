import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import Abiasa from "../assets/Abiasa.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between px-6 shadow-[0px_10px_50px_0px_rgba(83,83,83,0.5)]">
      <div className="w-auto">
        <div className="flex flex-row gap-1">
          <HiHome className="h-7 w-7 text-[#00715C] font-bold" />
          <p className="h-full text-[16px] font-bold text-[#00715C] pt-2 border-[rgb(0,113,92)] border-b-[2px]">
            Beranda
          </p>
        </div>
        <div className="w-auto px-5">
          <div className="flex flex-row gap-1">
            <CgProfile className="h-7 w-7 text-[rgb(83,83,83)] font-bold" />
            <p className="h-full text-[16px] font-bold text-[#535353] pt-2">
              Profil
            </p>
          </div>
        </div>
      </div>

      <div className="mr-[6rem]">
        <img className="w-36 pb-2" src={Abiasa} alt="Abiasa.png" />
      </div>

      <div className="dropdown dropdown-end">
        <div className="flex">
          <p className="text-[#2A3342] text-[14px] text-center px-2 py-2 font-semibold">
            Anette Black
          </p>
          <label tabIndex={0} className="w-10 h-10 avatar online">
            <div className="rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 shadow p-2 bg-base-100 rounded-box w-44"
        >
          <li>
            <a className="justify-between">About Me</a>
          </li>
          <li>
            <a>Dark Mode</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;