import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import Abiasa from "../assets/Abiasa.png";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const handleLogout = async () => {
    removeCookie("token");
    // dispatch(handleAuth(false));
    navigate("/login");
    alert("You have been logged out");
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 flex justify-between px-6 shadow-[0px_1px_40px_0px_rgba(83,83,83,0.5)]">
      <div className="w-auto">
        <div className="flex flex-row gap-1">
          <HiHome className="h-7 w-7 text-[#00715C] font-bold" />
          <Link
            to="/"
            className="h-full text-[16px] font-bold text-[#00715C] pt-2 border-[rgb(0,113,92)] border-b-[2px]"
          >
            Beranda
          </Link>
        </div>
        <div className="w-auto px-5">
          <div className="flex flex-row gap-1">
            <CgProfile className="h-7 w-7 text-[rgb(83,83,83)] font-bold" />
            <Link
              to="/profil"
              className="h-full text-[16px] font-bold text-[#535353] pt-2"
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
            <Link to="/aboutme" className="justify-between">
              About Me
            </Link>
          </li>
          <li>
            <a>Dark Mode</a>
          </li>
          <li>
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
