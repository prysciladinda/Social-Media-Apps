import Footer from "../components/footer";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import SideNav from "../components/sideNav";

const Aboutme = () => {
  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-6">
          <div className="flex flex-col items-center w-full bg-zinc-50 rounded-3xl shadow-lg text-center p-5">
            <p className="text-[24px] font-bold">About me</p>

            <table className="w-9/12 mt-8 border-separate border-spacing-3">
              <tbody className="text-left">
                <tr>
                  <td className="pl-16">Username :</td>
                  <td className="item-center border rounded-full w-[15em]">
                    <Input
                      id="input_username"
                      type="username"
                      placeholder="Anette Black"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pl-16">E-mail :</td>
                  <td className="item-center border rounded-full">
                    <Input
                      id="input_email"
                      type="email"
                      placeholder="anetteblack@gmail.com"
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

            {/* <div className="flex flex-col">
              <ul className="list-none">
                <li>Username</li>
                <li>E-mail</li>
                <li>Password</li>
              </ul>
              <ul>
                <li>Username</li>
                <li>E-mail</li>
                <li>Password</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="col-span-3">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Aboutme;