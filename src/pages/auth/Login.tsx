import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/buttonRegister";
import logoOrang from "../../assets/logo-orang.png";
import logoAbiAsa from "../../assets/Abi-Asa.png";
import { Link, useNavigate } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Swal from "../../utils/swal";
import axios from "axios";
// import { useDispatch } from "react";

function Login() {
  const [, setCookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post("54.169.251.151/login", body)
      .then((res) => {
        const { data, message } = res.data;
        setCookie("token", data.token, { path: "/" });
        // dispatch(handleAuth(true));
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <div
        className=" container lg:container md:container   sm:container w-full justify-center text-center flex justify-items-center pt-8
           h-auto pl-20"
      >
        <div
          className="flex 
        justify-around justify-items-center rounded-2xl  h-full pb-12 w-4/5 bg-white "
        >
          <div className="pt-32 ">
            <img className="pb-8 pl-16 w-4/5" src={logoOrang} />
            <p className="text-center text-white border-b-4 border-dotted pt-4">
              {" "}
              Enter your personal details
              <br />
              and start journey with us
            </p>
            <div className="flex justify-center pt-9">
              <Button label="Sign Up" onClick={() => navigate("/register")} />
            </div>
          </div>
          <div className="w-2/5 ">
            <div className="flex pt-6  justify-end w-full h-20">
              <Link to="/">
                <img className="h-9" src={logoAbiAsa} />
              </Link>
            </div>
            <h1 className="text-center pb-4 text-4xl font-bold">Login</h1>
            <p className="text-center text-xs text-slate-400 border-b-4 pb-4 border-dashed">
              Login to make an post, access your profile, <br /> experience
              special, and more!
            </p>
            <form
              className="flex flex-col pt-9 gap-4 min-w-[40%] "
              onSubmit={(e) => handleSubmit(e)}
            >
              <p className="text-start text-slate-500">E-mail</p>
              <div className=" flex w-3/4 pl-4 flex-row gap-1 border items-center rounded-lg">
                <MdEmail className="h-7 w-7 text-slate-400 " />
                <Input
                  id="input-username"
                  type="email"
                  placeholder=".......@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className="text-start text-slate-500">Password</p>
              <div className=" flex pl-5 w-3/4 items-center flex-row gap-1 border rounded-lg">
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
                  id="btn-login"
                  label="Login"
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

export default Login;
