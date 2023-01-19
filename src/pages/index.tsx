import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Card from "../components/card";
import Footer from "../components/footer";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import SideNav from "../components/sideNav";

interface datasType {
  id?: number;
  content?: string;
  image_content?: string;
  names?: string;
  // post_id?: number;
}

const Index = () => {
  // const dispatch = useDispatch();
  const [datas, setDatas] = useState<datasType[]>([]);
  // const [names, setnames] = useState<datasType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/posts`
      )
      .then((res) => {
        setDatas(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="flex flex-col gap-4 col-span-6">
          {datas.map((datas) => (
            <Card
              key={datas.id}
              content={datas.content}
              image_content={datas.image_content}
            />
          ))}
        </div>
        <div className="col-span-3">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
