import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-row ">
      <div className="w-36 ">
        <img className="bg-white" src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
