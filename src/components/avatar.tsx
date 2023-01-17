import Sidenav from "../assets/sideNav.png";

const Avatar = () => {
  return (
    <table className="mt-2">
      <tbody>
        <tr>
          <img
            className="w-9 h-9 rounded-full my-2"
            src={Sidenav}
            alt="sideNav.png"
          />
          <td className="px-3">
            <p className="text-zinc-800 text-[14px]">Amanda Emma</p>
            <p className="text-zinc-500 text-[12px] text-left">@amandaemma</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Avatar;
