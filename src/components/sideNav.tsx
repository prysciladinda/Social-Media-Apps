import Avatar from "./avatar";

const SideNav = () => {
  return (
    <div className="sticky top-[122px] right-0 text-center p-6 pl-5 w-[16rem] h-96 bg-zinc-50 rounded-r-3xl shadow-[2px_4px_20px_0px_rgba(83,83,83,0.5)] dark:bg-zinc-800">
      <p className="text-[14px] font-semibold text-zinc-800] mb-4 dark:text-zinc-50">
        Rekomendasi akun
      </p>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </div>
  );
};

export default SideNav;
