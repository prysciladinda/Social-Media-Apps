import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoOrang from "../../assets/logo-orang.png";
import logoAbiAsa from "../../assets/Abi-Asa.png";

import { BsFillPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <Layout>
      <div className="flex justify-end w-full h-20">
        <img className="h-full" src={logoAbiAsa} />
      </div>
      <div className="flex justify-center justify-items-center ">
        <div className="pt-12">
          <img className="pb-6" src={logoOrang} />
          <p className="text-center text-white border-b-4 border-dotted pt-4">
            {" "}
            Enter your personal details
            <br />
            and start journey with us
          </p>
          <div className="flex justify-center pt-7">
            <Button label="Sign Up" />
          </div>
        </div>
        <div className="pl-56 pt-8">
          <h1 className="text-center text-5xl font-bold">Login</h1>
          <br />
          <p className="text-center text-slate-400 border-b-4 border-dashed">
            Login to make an post, access your profile, <br /> experience
            special, and more!
          </p>
          <form className="flex flex-col pt-9 gap-4 min-w-[40%] ">
            <p className="text-slate-500">Username</p>
            <div className=" flex w-full pl-4 flex-row gap-1 border items-center rounded-lg">
              <BsFillPersonFill className="h-7 w-7 text-slate-400 " />
              <Input
                id="input-username"
                type="username"
                placeholder="Budi santoso"
              />
            </div>
            <p className="text-slate-500">Password</p>
            <div className=" flex pl-5 w-full items-center flex-row gap-1 border rounded-lg">
              <FaLock className="h-5 w-5 text-slate-400 " />
              <Input
                id="input-password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center pt-6">
              <Button label="Submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
