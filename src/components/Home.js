import { Link } from 'react-router-dom';
import homeImage from '../assets/homeImage.png';
import Features from './Features';
function Home() {
  return (
    <>
      <div className="flex items-center flex-col-reverse md:flex-row justify-between">
        {/* left */}
        <div className=" md:w-1/2 space-y-5 mt-14 md:mt-0 ">
          <h2 className=" text-2xl ">New products</h2>
          <h1 className=" text-6xl ">flexible Chair</h1>
          <p className=" text-lg text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            consectetur adipisicing elit.
          </p>
          <button className=" bg-orange-600 text-white px-5 hover:text-orange-500 hover:bg-white py-2 shadow transition-all duration-400">
            <Link to="Products">Shop Now</Link>
          </button>
        </div>
        {/* right */}
        <div>
          <img src={homeImage} alt="" />
        </div>
      </div>
      <Features />
    </>
  );
}

export default Home;
