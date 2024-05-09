const PageButton: React.FC<{
  pg: number;
  setPage: (pg: number) => void;
  isPreviousData: boolean;
}> = ({ pg, setPage, isPreviousData }) => {
  return (
    <button
      className="h-6 w-6 px-4 justify-center flex bg-slate-300"
      onClick={() => setPage(pg)}
      disabled={isPreviousData}
    >
      {pg}
    </button>
  );
};

export default PageButton;
