import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="w-48 h-24 ">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex w-96 h-20 bg-slate-400 items-center justify-center text-lg">
        Advertisement Placeholder
      </div>
    </div>
  );
};

export default Logo;
