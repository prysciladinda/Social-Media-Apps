import Footer from "../components/footer";
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
          <div className="w-full bg-zinc-50 rounded-3xl shadow-lg text-center p-5">
            <p className="text-[24px] font-bold">About me</p>

            <table>
              <tbody className="w-20 bg-zinc-600 ">
                <tr className="text-left">
                  <td>Username</td>
                  <td>Username</td>
                </tr>
                <tr className="text-left">
                  <td>E-mail</td>
                  <td></td>
                </tr>
                <tr className="text-left">
                  <td>Password</td>
                  <td></td>
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
