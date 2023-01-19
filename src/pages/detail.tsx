import Footer from "../components/footer";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import SideNav from "../components/sideNav";

import Avatarcard from "../assets/sideNav.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface datasType {
  id?: number;
  post_id?: number;
  content?: string;
  image_content?: string;
  username?: string;
  user_pp?: string;
  comment?: commentType[];
}
type commentType = {
  comment_id?: number;
  comment?: string;
  username?: string;
};

const Detail = () => {
  const { post_id } = useParams();
  const [inputCom, setInputCom] = useState<string>("");
  const [data, setData] = useState<datasType>({});

  useEffect(() => {
    fetchDatas();
  }, []);

  // function handlerDelete(){

  // }
  function handlerAddcom() {
    const body = { inputCom };
    axios
      .post("http://18.142.182.200/comments", body)
      .then((res) => {
        console.log(res.data.data);
        alert("sukses menambahkan data");
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setInputCom("");
        fetchDatas();
      });
  }

  function fetchDatas() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/posts/${post_id}`
      )
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3 h-11">
          <SideNav />
        </div>
        <div className="flex flex-col gap-4 col-span-6">
          <div className="flex justify-center w-full ">
            <div className="card w-[40vw] bg-base-100 shadow-xl p-4 pb-9">
              <div className="flex gap-2 py-3 px-1">
                <img
                  className="w-10 h-10 rounded-full"
                  src={Avatarcard}
                  alt="sideNav.png"
                />
                <p className="inline font-semibold leading-10">
                  {data.username}
                </p>
              </div>

              <div>
                <figure className="w-full h-96">
                  <img
                    className="object-contain"
                    src={`https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/posts/${data.image_content}`}
                  />
                </figure>
              </div>
              <div className="pt-5">
                <p className="text-[14px] leading-6 border-b-2 pb-2">
                  <span className="font-bold">{data.username}</span>
                  {data.content}
                </p>
                <div className="">
                  <p className="text-[14px] text-zinc-400 pt-1 pb-3">
                    Add a comment . . . . . . .
                  </p>

                  {data.comment?.map((item) => (
                    <p className="text-[14px] leading-6 mt-5">
                      <span className="font-bold">{data.username}</span>slay
                      girl minta likenya dong
                    </p>
                  ))}
                  {data.comment?.map((item) => (
                    <p className="text-[14px] leading-6 mt-5">
                      <span className="font-bold">{data.username}</span> minta
                      likenya dong
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
