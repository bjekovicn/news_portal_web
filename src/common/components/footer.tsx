import Logo from "./logo";

function Footer() {
  return (
    <div className="flex w-full mt-10 h-96 flex-col">
      <div className="w-full flex flex-col md:flex-row h-full bg-gray-950 justify-center items-center gap-2">
        <Logo />
        <p className="text-white text-xs md:text-sm lg:text-lg  w-96 mx-36 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed.
        </p>
        <div className="flex flex-col">
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
      <div className="w-full flex flex-row h-14 border-b-2 bg-gray-800 justify-center items-center ">
        <div className="text-white text-lg ">Coppyright@2023 I-News</div>
      </div>
    </div>
  );
}

export default Footer;
