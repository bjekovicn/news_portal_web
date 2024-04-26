import Logo from "./logo";
import MenuBar from "./menu_bar";

function Header() {
  return (
    <>
      <header className="w-full flex flex-row h-10 border-b-2 bg-[#24252f]"></header>
      <div className="w-full mb-4 h-44 border-b-gray-300 border-b flex justify-center">
        <div className="container flex flex-col items-center justify-between ">
          <Logo />
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default Header;
