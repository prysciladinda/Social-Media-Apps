import Avatarcard from "../assets/sideNav.png";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface cardProps {
  id?: number;
  content?: string;
  image_content?: string;
  // post_id: number;
}
const Card: FC<cardProps> = ({ id, content, image_content }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="flex justify-center w-full ">
      <div className="card w-[40vw] bg-base-100 shadow-xl p-4 dark:bg-zinc-800">
        <div className="flex gap-2 py-3 px-1">
          <img
            className="w-10 h-10 rounded-full"
            src={Avatarcard}
            alt="sideNav.png"
          />
          <p className="inline font-semibold leading-10 dark:text-zinc-50">
            Anette Black
          </p>
        </div>
        <div>
          <figure onClick={() => onClickDetail()} className="w-full h-96">
            <img
              className="object-contain"
              src={
                `https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/posts/${image_content}` ===
                null
                  ? ""
                  : `https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/posts/${image_content}`
              }
            />
          </figure>
        </div>
        <div className="pt-5">
          <p
            onClick={() => onClickDetail()}
            className="text-[14px] leading-6 border-b-2 pb-2 dark:text-zinc-50"
          >
            <span className="font-bold">Anetta Black</span> {content}
          </p>
          <div onClick={() => onClickDetail()}>
            <p className="text-[14px] text-zinc-400 pt-1 dark:text-zinc-50">
              Add a comment . . . . . . .
            </p>
            <a className="text-[14px] text-zinc-600 pt-1 dark:text-zinc-50">
              View all comment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
