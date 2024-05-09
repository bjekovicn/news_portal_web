import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MenuBar from "./menu_bar";

function Header() {
  return (
    <>
      <div className="h-8 bg-[#24252f] w-full justify-center flex">
        <div className="container h-8  flex flex-row items-center gap-3 px-4">
          <FaInstagram className="text-white cursor-pointer" />
          <FaFacebook className="text-white cursor-pointer" />
          <FaYoutube className="text-white cursor-pointer" />
          <div className="w-px h-4 bg-gray-400"></div>
          <p className="text-white cursor-pointer">Contact</p>
        </div>
      </div>
      <div className="w-full h-28 mt-2 md:h-36 lg:h-44 border-b-gray-300 border-b flex justify-center">
        <div className="container flex flex-col items-center justify-between flex-grow">
          <div className="flex flex-row flex-grow justify-between w-full items-center py-1 md:py-2 lg:py-4 px-2 gap-4">
            <div className="h-full w-40 bg-[#24252f] flex justify-center items-center text-xl font-semibold text-white">
              Logo
            </div>
            <div className="h-full w-96 bg-[#24252f] text-xl font-semibold text-white flex justify-center items-center">
              Baner Reklama
            </div>
          </div>
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default Header;
