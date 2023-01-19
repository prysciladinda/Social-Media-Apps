import Sidenav from "../assets/sideNav.png";
import SideNav from "./sideNav";

const Avatar = () => {
  return (
    <div className="flex gap-2 py-3 px-1  items-center">
      <img className="w-9 h-9 rounded-full" src={Sidenav} alt="sideNav.png" />
      <ul className="list-none">
        <li className="text-[12px] font-bold dark:text-zinc-50">Amanda Emma</li>
        <li className="text-zinc-500 text-[12px] text-start dark:text-zinc-50">
          @amandaemma
        </li>
      </ul>
      <p className="inline font-semibold leading-10"></p>
    </div>
  );
};

export default Avatar;
