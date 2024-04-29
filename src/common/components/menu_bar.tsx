import MenuItems from "./menu_items";
import Search from "./search";

const MenuBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full p-2">
        <MenuItems></MenuItems>
        <Search></Search>
      </div>
    </>
  );
};

export default MenuBar;
