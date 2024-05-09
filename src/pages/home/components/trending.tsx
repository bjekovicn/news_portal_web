const Trending = () => {
  return (
    <div className="h-8 flex flex-row mx-2 mb-1 mt-3">
      <div className="bg-slate-800 px-6 flex items-center justify-center text-white text-sm  md:text-base lg:text-lg">
        Popularno
      </div>
      <div className="bg-gray-50-800 pl-8 flex-grow flex items-center justify-start font-light text-sm  md:text-base lg:text-lg hover:bg-slate-200">
        Trenutno neka popularna vijest...
      </div>
    </div>
  );
};

export default Trending;
