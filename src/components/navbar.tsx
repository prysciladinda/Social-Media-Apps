import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { handleAuth } from "../utils/redux/reducers/reducer";
import { ThemeContext } from "../utils/context";

import Abiasa from "../assets/Abiasa.png";

import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const dispatch = useDispatch();

  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const handleLogout = async () => {
    removeCookie("token");
    dispatch(handleAuth(false));
    navigate("/login");
    alert("You have been logged out");
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 dark:bg-zinc-900 flex justify-between px-6 shadow-[0px_1px_40px_0px_rgba(83,83,83,0.5)]">
      <div className="w-auto">
        <div className="flex flex-row gap-1">
          <HiHome className="h-7 w-7 text-[#00715C] font-bold dark:text-[#ACF9F2]" />
          <Link
            to="/"
            className="h-full text-[16px] font-bold text-[#00715C] pt-2 border-[rgb(0,113,92)] border-b-[2px] dark:text-[#ACF9F2] dark:border-[#ACF9F2]"
          >
            Beranda
          </Link>
        </div>
        <div className="w-auto px-5">
          <div className="flex flex-row gap-1">
            <CgProfile className="h-7 w-7 text-[rgb(83,83,83)] font-bold dark:text-zinc-50" />
            <Link
              to="/profil"
              className="h-full text-[16px] font-bold text-[#535353] pt-2 dark:text-zinc-50"
            >
              Profil
            </Link>
          </div>
        </div>
      </div>

      <div className="mr-[6rem]">
        <Link to="/">
          <img className="w-36 pb-2" src={Abiasa} alt="Abiasa.png" />
        </Link>
      </div>

      <div className="dropdown dropdown-end ">
        <div className="flex">
          <p className="text-[#2A3342] text-[14px] text-center px-2 py-2 font-semibold dark:text-zinc-50">
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
          className="menu menu-compact dropdown-content mt-3 shadow p-2 bg-base-100 rounded-box w-44 dark:bg-zinc-800"
        >
          <li>
            <Link to="/aboutme" className="justify-between dark:text-zinc-50">
              About Me
            </Link>
          </li>
          <li>
            <a className="dark:text-zinc-50" onClick={() => handleTheme()}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
              {/* {handleTheme == setTheme("dark") ? "Light Mode" : "Dark Mode"} */}
            </a>
          </li>
          <li className="text-slate-700 dark:text-zinc-50">
            <button
              onClick={() => (checkToken ? handleLogout() : navigate("/login"))}
            >
              {checkToken ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
