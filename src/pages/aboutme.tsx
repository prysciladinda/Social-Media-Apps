import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";

import Inputedit from "../components/inputEditData";
import Button from "../components/buttonRegister";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Input from "../components/Input";

import Swal from "../utils/swal";

import Profil from "../assets/profile.jpg";

interface ProfileType {
  email?: string;
  username?: string;
  image?: any;
}

const Aboutme = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [objSubmit, setObjSubmit] = useState<ProfileType>({});

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/users"
      )
      .then((res) => {
        const { username, email } = res.data;
        setUsername(username);
        setEmail(email);
        // console.log(res.data);
        console.log(username);
        console.log(email);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(handleSubmit); //
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //   console.log(handleSubmit);
    //   setLoading(true);
    //   e.preventDefault();
    //   const formData = {
    //     username,
    //     email,
    //   };

    axios
      .put(
        "https://virtserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        console.log(res.data); //console
        MySwal.fire({
          title: "Data was edit . . .",
          text: message,
          showCancelButton: false,
        });
        setObjSubmit({});
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: " Error data to edit ",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData());
  };

  const handleChange = (value: string | File, key: keyof typeof objSubmit) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <>
        <Navbar />
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-3">
            <SideNav />
          </div>

          <div className="col-span-6">
            <div className="flex flex-col items-center w-full bg-zinc-50 rounded-3xl shadow-lg text-center p-5">
              <p className="text-[24px] font-bold mb-3">About me</p>
              <img
                className="w-28 h-28 border-2 border-zinc-600 rounded-full"
                src={Profil}
                alt="profil.jpg"
              />

              <form className="w-9/12" onSubmit={(e) => handleSubmit(e)}>
                <table className="mt-8 border-separate border-spacing-3">
                  <tbody className="text-left">
                    <tr>
                      <td className="pl-16">Upload Image :</td>
                      <td className="item-center  rounded-full w-[15em]">
                        <input
                          className="w-full"
                          type="file"
                          id="imgProfil"
                          name="img"
                          accept="image/*"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-16">Username :</td>
                      <td className="item-center border rounded-full w-[15em]">
                        {/* <Inputedit
                          id="input-username"
                          type="text"
                          placeholder="username"
                          defaultValue={username}
                          onChange={
                            (e) => handleChange(e.target.value, "username") //ttd Noted
                          }
                        /> */}
                        <Input
                          id="input_username"
                          type="username"
                          placeholder={username}
                          defaultValue={username}
                          onChange={(e) =>
                            handleChange(e.target.value, "username")
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-16">E-mail :</td>
                      <td className="item-center border rounded-full">
                        <Input
                          id="input_email"
                          type="email"
                          placeholder={email}
                          defaultValue={email}
                          onChange={(e) =>
                            handleChange(e.target.value, "email")
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-16">Password :</td>
                      <td className="item-center border rounded-full">
                        <Input
                          id="input_password"
                          type="password"
                          placeholder="**********"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <Button id="btn-submit" label="Submit" loading={loading} />
            </div>
          </div>
          <div className="col-span-3">
            <Footer />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Aboutme;
