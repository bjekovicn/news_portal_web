import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "./logo";
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
      <div className="w-full mb-4 h-28 md:h-32 lg:h-44 border-b-gray-300 border-b flex justify-center">
        <div className="container flex flex-col items-center justify-between ">
          <Logo />
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default Header;
