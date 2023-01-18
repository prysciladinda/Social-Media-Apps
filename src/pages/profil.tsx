import Card from "../components/card";
import Footer from "../components/footer";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import SideNav from "../components/sideNav";
import Profile from "../assets/profile.png";
import Backdrop from "../assets/backdrop.png";
import Input from "../components/Input";
import Iconupload from "../assets/uploadimage.png";
import Button from "../components/buttonRegister";

const Profil = () => {
  return (
    <Layout>
      <Navbar />
      <div className="text-center mt-7">
        <div className="flex justify-center w-full">
          <img
            className="w-[120px] rounded-full border-4 border-zinc-50"
            src={Profile}
            alt="Profil.jpg"
          />
        </div>
        <div
          className="h-[150px] bg-repeat -mt-[40px] -mb-6"
          style={{
            backgroundImage: `url(${Backdrop})`,
          }}
        >
          <p className="w-full text-zinc-900 font-bold text-[36px] leading-[150px] ">
            Dianna Puspitasari
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3 h-11">
          <SideNav />
        </div>
        <div className="flex flex-col gap-4 col-span-6">
          <div className="w-full py-3 px-5 bg-zinc-50 rounded-3xl">
            <Input
              className="w-full bg-zinc-200 rounded-3xl p-5"
              id="input_posting"
              type="string"
              placeholder=" Buat postingan sekarang . . . . . . . "
            />
            <div className="w-full text-end mt-3 pr-10">
              <button className="w-[100px] leading-normal h-[30px] bg-[#00715C] mx-auto text-zinc-50 font-bold rounded-full text-[14px]">
                Image
              </button>

              <button className="w-[100px] leading-normal h-[30px] bg-[#00715C] mx-auto text-zinc-50 font-bold rounded-full text-[14px] ml-4">
                Post
              </button>
            </div>
          </div>
          <Card />
          <Card />
        </div>
        <div className="col-span-3">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Profil;
