import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Adds from "../components/Adds";
import Influencer from "../components/Influencer";
import Special from "../components/Special";


function Home() {
  return (
    <>
      <Navbar />
      <Influencer />
      <Adds />
      <Special />
      <div style={{height:'100px'}}></div>
      <Footer />
    </>
  );
}

export default Home;
