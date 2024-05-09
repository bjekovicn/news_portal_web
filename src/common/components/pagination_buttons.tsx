import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationButtons: React.FC<{
  totalPages: number;
  currentPage: number;
  onPreviousHandler: () => void;
  onNextHandler: () => void;
}> = ({ onPreviousHandler, onNextHandler, currentPage, totalPages }) => {
  return (
    <>
      <div className="flex flex-row gap-10 m-1 mt-6 h-10">
        {currentPage === 1 ? (
          <div className="w-1/2" />
        ) : (
          <div
            onClick={onPreviousHandler}
            className="bg-gray-300 w-1/2 justify-center items-center flex font-semibold text-gray-600 cursor-pointer"
          >
            <FaChevronLeft className="mr-2" />
            Prethodna
          </div>
        )}
        {currentPage === totalPages ? (
          <div className="w-1/2" />
        ) : (
          <div
            onClick={onNextHandler}
            className="bg-pink-600 w-1/2 justify-center items-center flex font-semibold text-white cursor-pointer"
          >
            Sljedeća
            <FaChevronRight className="ml-2" />
          </div>
        )}
      </div>
    </>
  );
};

export default PaginationButtons;
