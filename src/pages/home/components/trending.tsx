import { useState, useEffect } from "react";

const texts = ["Tekst 1", "Tekst 2", "Tekst 3"];

const Trending = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-8 flex flex-row mx-2 mb-1 mt-3">
        <div className="flex flex-row">
          <div className="bg-red-600 w-1"></div>
          <div className="bg-slate-800 px-6 flex items-center justify-center text-white text-sm  md:text-base lg:text-lg">
            Popularno
          </div>
        </div>

        <div className="bg-gray-50-800 pl-8 flex-grow flex items-center justify-start font-light text-sm  md:text-base lg:text-lg hover:bg-slate-200">
          {texts[index]}
        </div>
      </div>
    </div>
  );
};

export default Trending;
