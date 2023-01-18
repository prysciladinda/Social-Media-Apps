import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/buttonRegister";
import logoOrang from "../../assets/logo-orang.png";
import logoAbiAsa from "../../assets/Abi-Asa.png";

import { BsFillPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
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
          <div className="pt-40 ">
            <img className="pb-8 pl-16 w-4/5" src={logoOrang} />
            <p className="text-center text-white border-b-4 border-dotted pt-4">
              {" "}
              To keep connected with us
              <br />
              please login with your personal info
              <br />
            </p>
            <div className="flex justify-center pt-20">
              <Button label="Sign In" />
            </div>
          </div>
          <div className="w-2/5 ">
            <div className="flex pt-6  justify-end w-full h-20">
              <img className="h-9" src={logoAbiAsa} />
            </div>
            <h1 className="text-center pt-4 text-3xl font-bold">
              Create Account
            </h1>
            <p className="text-center text-xs text-slate-400 pb-4 border-b-4 border-dashed">
              Create your Account and Enjoy Together
            </p>
            <form className="flex flex-col pt-8 gap-4 min-w-[40%] ">
              <p className="text-start text-slate-500">Username</p>
              <div className=" flex w-3/4 pl-4 flex-row gap-1 border items-center rounded-lg">
                <BsFillPersonFill className="h-7 w-7 text-slate-400 " />
                <Input
                  id="input-username"
                  type="username"
                  placeholder="Budi santoso"
                />
              </div>
              <p className="text-start text-slate-500">E-mail</p>
              <div className=" flex w-3/4 pl-4 flex-row gap-1 border items-center rounded-lg">
                <MdEmail className="h-7 w-7 text-slate-400 " />
                <Input
                  id="input-username"
                  type="email"
                  placeholder=".......@gmail.com"
                />
              </div>
              <p className="text-start text-slate-500">Password</p>
              <div className=" flex pl-5 w-3/4 items-center flex-row gap-1 border rounded-lg">
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
      </div>
    </Layout>
  );
}

export default Register;
