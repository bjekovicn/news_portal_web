import logo from "../../assets/logo.png"; // Tell webpack this JS file uses this image

const Logo = () => {
  return (
    <div className="flex flex-row w-full justify-between p-4 py-4">
      <div className="w-48 ">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex w-96 h-20 bg-slate-400 items-center justify-center text-lg">
        Advertisement Placeholder
      </div>
    </div>
  );
};

export default Logo;
