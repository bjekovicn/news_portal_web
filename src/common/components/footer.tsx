import { FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "./logo";

function Footer() {
  return (
    <div className="flex w-full mt-10 h-96 flex-col">
      <div className="w-full flex flex-col md:flex-row h-full bg-gray-950 justify-center items-center gap-2">
        <div className="flex flex-1 justify-center items-center">
          <Logo />
        </div>
        <p className="text-white text-xs md:text-sm lg:text-lg text-center flex-1 items-center justify-center mx-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed.
        </p>
        <div className="flex flex-1 justify-center items-center flex-col">
          <div>
            <input
              defaultValue={"Enter your email address"}
              className="text-black px-4 py-2 mr-3"
            ></input>
            <button className="text-white px-4 bg-pink-600 py-2">
              Subscribe
            </button>
          </div>
          <p className="text-white mt-2">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
      <div className="w-full py-4 gap-8 flex flex-row h-14 bg-gray-950 justify-center items-center">
        <FaInstagram className="text-white cursor-pointer" />
        <FaFacebook className="text-white cursor-pointer" />
      </div>
      <div className="w-full flex flex-row h-14 bg-gray-800 justify-center items-center ">
        <div className="text-white text-lg ">Coppyright@2023 I-News</div>
      </div>
    </div>
  );
}

export default Footer;
