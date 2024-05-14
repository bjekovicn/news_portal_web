import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MenuBar from "./menu_bar";
import logo from "../../assets/logo-header.png";

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
          <div className="flex flex-row flex-grow justify-between w-full items-center py-1 px-2 gap-10">
            <div className="h-full w-40 flex justify-center items-center text-xl font-semibold text-white">
              <img className="bg-white" src={logo} alt="Logo" />
            </div>
            <div className="h-full w-96  text-xs md:text-base text-center font-semibold flex justify-center items-center">
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form.
            </div>
          </div>
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default Header;
