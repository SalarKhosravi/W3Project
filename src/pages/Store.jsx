import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import ProductListShow from "../components/ProductListShow";
import Adds from "../components/Adds";


function Store() {
  return (
    <>
      <Navbar />
      <h1 className='bg-danger'>
          Store page
      </h1>
      <Adds />
      <SlideShow />
      <ProductListShow />
    </>
  );
}

export default Store;
