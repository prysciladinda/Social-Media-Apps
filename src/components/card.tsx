import Avatarcard from "../assets/sideNav.png";
import Hinata from "../assets/hinata.jpg";

const Card = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="card w-[40vw] bg-base-100 shadow-xl p-4">
        <div className="flex gap-2 py-3 px-1">
          <img
            className="w-10 h-10 rounded-full"
            src={Avatarcard}
            alt="sideNav.png"
          />
          <p className="inline font-semibold leading-10">Anette Black</p>
        </div>
        <div>
          <figure className="w-full h-96">
            <img className="object-contain" src={Hinata} alt="hinata.jpg" />
          </figure>
        </div>
        <div className="pt-5">
          <p className="text-[14px] leading-6 border-b-2 pb-2">
            <span className="font-bold">Anetta Black</span> bukan sembarang
            anime, tapi anime kesukaan aku ya guys ya, kalau ada yang tanya ini
            anime apa, sini aku kasih tau ya. ini namanya anime haikyu ya, inget
            ya anime haikyu !!
          </p>
          <div className="">
            <p className="text-[14px] text-zinc-400 pt-1">
              Add a comment . . . . . . .
            </p>
            <a className="text-[14px] text-zinc-600 pt-1">View all comment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
