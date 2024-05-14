import MenuItems from "./menu_items";

const MenuBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full pb-1">
        <MenuItems></MenuItems>
        {/* <Search></Search> */}
      </div>
    </>
  );
};

export default MenuBar;
