import Footer from "../components/footer";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import SideNav from "../components/sideNav";

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-3 h-11">
          <SideNav />
        </div>
        <div className="col-span-6 bg-white"> TES </div>
        <div className="col-span-3">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
