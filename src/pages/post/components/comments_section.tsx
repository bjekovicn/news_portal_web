import CommentCard from "./comment_card";

const CommentsSection = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-between items-center mb-6 border-b-2 border-gray-100 ">
        <p className="text-2xl font-semibold">Komentari</p>
        <button className="text-white px-4 bg-pink-600 py-2 mt-4 mb-2 ">
          Pošaljite komentar
        </button>
      </div>
      <CommentCard
        id={12}
        isReply={false}
        author="Nikola"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        createdAt={new Date().toISOString()}
        replies={[
          {
            id: 1,
            author: "Pera",
            content: "Odgovor 1",
            createdAt: new Date().toISOString(),
          },
          {
            id: 2,
            author: "Mika",
            content: "Odgovor 2",
            createdAt: new Date().toISOString(),
          },
        ]}
      />
      <CommentCard
        id={12}
        isReply={false}
        author="Nikola"
        content="Neki komentar"
        createdAt={new Date().toISOString()}
        replies={[]}
      />
      <CommentCard
        id={12}
        isReply={false}
        author="Nikola"
        content="Neki komentar"
        createdAt={new Date().toISOString()}
        replies={[
          {
            id: 1,
            author: "Pera",
            content: "Odgovor 1",
            createdAt: new Date().toISOString(),
          },
          {
            id: 2,
            author: "Mika",
            content: "Odgovor 2",
            createdAt: new Date().toISOString(),
          },
        ]}
      />
      ,
      <CommentCard
        id={12}
        isReply={false}
        author="Nikola"
        content="Neki komentar"
        createdAt={new Date().toISOString()}
        replies={[]}
      />
    </div>
  );
};

export default CommentsSection;
