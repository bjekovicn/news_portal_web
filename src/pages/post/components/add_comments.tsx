const AddComment = () => {
  return (
    <div className="border-gray-100 border-solid border-2 p-2 gap-2 flex flex-col items-center">
      <input
        placeholder="Vaše ime"
        className="text-black px-4 py-2  border border-gray-200 border-solid w-full"
      />

      <textarea
        rows={6}
        placeholder="Napišite vaš komentar ovdje"
        className="border border-gray-200 border-solid px-4 py-2 w-full resize-none"
      />
      <button className="text-white px-4 bg-pink-600 py-2 mt-8 w-full">
        Pošaljite komentar
      </button>
    </div>
  );
};

export default AddComment;
