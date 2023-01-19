import WithReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "../../utils/swal";

import Button from "../../components/buttonRegister";
import logoOrang from "../../assets/logo-orang.jpg";
import logoAbiAsa from "../../assets/Abi-Asa.jpg";

import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

import { BsFillPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
  const MySwal = WithReactContent(Swal);
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (name && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };
    console.log(body); //console 1

    axios
      .post("http://18.142.182.200/register", body)

      .then((res) => {
        const { message, data } = res.data;
        console.log(res.data); //console2
        MySwal.fire({
          title: "Data was accepted . . .",
          text: message,
          showCancelButton: false,
        });
        if (data) {
          navigate("/login");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Data cannot accepted",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div
        className=" container lg:container md:container sm:container w-full justify-center text-center flex justify-items-center pt-8
           h-auto pl-20"
      >
        <div
          className="flex relative overflow-hidden 
        justify-around justify-items-center rounded-2xl  h-full pb-12 w-4/5 bg-white dark:bg-zinc-800"
        >
          <div className="w-[45rem] h-[60rem] rounded-[20%] rotate-[45deg] bg-[#2DCFC1] absolute z-10 top-[2rem] -left-[25rem]"></div>
          <div className="w-[40rem] h-[30rem] rounded-[38%] rotate-[60deg] bg-[#BFFFF9] absolute top-10 -left-[9rem]"></div>
          <div className="pt-40 z-50 ">
            <img className="pb-8 pl-16 w-4/5" src={logoOrang} />
            <p className="text-center text-white border-b-4 border-dotted pt-4">
              {" "}
              To keep connected with us
              <br />
              please login with your personal info
              <br />
            </p>
            <div className="flex justify-center pt-20">
              <Button label="Sign In" onClick={() => navigate("/login")} />
            </div>
          </div>
          <div className="w-2/5 ">
            <div className="flex pt-6  justify-end w-full h-20 ">
              <Link to="/">
                <img className="h-9" src={logoAbiAsa} />
              </Link>
            </div>
            <h1 className="text-center pt-4 text-3xl font-bold dark:text-zinc-50 ">
              Create Account
            </h1>
            <p className="text-center text-xs text-slate-400 pb-4 border-b-4 border-dashed dark:text-zinc-50">
              Create your Account and Enjoy Together
            </p>
            <form
              className="flex flex-col pt-8 gap-4 min-w-[40%]"
              onSubmit={(e) => handleSubmit(e)}
            >
              <p className="text-start text-slate-500 -mb-3 dark:text-zinc-50">
                Username
              </p>
              <div className=" flex w-3/4 h-11 pl-4 flex-row gap-1 border items-center rounded-lg dark:bg-zinc-50">
                <BsFillPersonFill className="h-7 w-7 text-slate-400 " />
                <Input
                  id="input-username"
                  type="username"
                  placeholder="Budi Santoso"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <p className="text-start text-slate-500 -mb-3 dark:text-zinc-50">
                E-mail
              </p>
              <div className=" flex w-3/4 h-11 pl-4 flex-row gap-1 border items-center rounded-lg dark:bg-zinc-50">
                <MdEmail className="h-7 w-7 text-slate-400 " />
                <Input
                  id="input"
                  type="email"
                  placeholder=".......@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className="text-start text-slate-500 -mb-3 dark:text-zinc-50">
                Password
              </p>
              <div className=" flex pl-5 w-3/4 h-11 items-center flex-row gap-1 border rounded-lg dark:bg-zinc-50">
                <FaLock className="h-5 w-5 text-slate-400 " />
                <Input
                  id="input-password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center pt-6">
                <Button
                  id="btn-users"
                  label="register"
                  loading={loading || disabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
