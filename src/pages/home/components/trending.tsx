const Trending = () => {
  return (
    <div className="h-10 flex flex-row mx-1 mb-4">
      <div className="bg-slate-800 px-6 flex items-center justify-center text-white">
        Popularno
      </div>
      <div className="bg-gray-50-800 pl-8 flex-grow flex items-center justify-start font-semibold text-lg hover:bg-sky-50">
        Trenutno neka popularna vijest...
      </div>
    </div>
  );
};

export default Trending;
