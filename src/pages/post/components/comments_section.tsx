import Modal from "react-modal";
import AddComment from "./add_comments";
import CommentCard from "./comment_card";
import axios from "../../../config/axios";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CommentSchema } from "../../../schemas/comment-schema";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const customProgressStyle = {
  background: "#d22477",
};

const retrieveCommentsData = async (id: string | undefined) => {
  if (!id) return [];
  const response = await axios.get(`comments-report/${id}`);

  return CommentSchema.array().parse(response);
};

const CommentsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`comments${id}`, () =>
    retrieveCommentsData(id)
  );

  if (isLoading || error) return <BeatLoader />;

  return (
    <>
      <div className="flex flex-col mt-24">
        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-100 ">
          <p className="text-2xl font-semibold">Komentari</p>
          <button
            className="text-white px-4 bg-pink-600 py-2 mt-4 mb-2"
            onClick={openModal}
          >
            Pošaljite komentar
          </button>
        </div>
        {data?.length === 0 && (
          <p className="flex pt-4 text-gray-400">
            Ovaj članak trenutno nema komentare
          </p>
        )}
        {data?.map((comment) => {
          return <CommentCard {...comment} isReply={false} key={comment.id} />;
        })}

        <Modal
          ariaHideApp={false}
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="absolute top-0 left-0 right-0 bottom-0 m-auto h-min  max-w-md mx-8 md:mx-auto content-center bg-white p-2"
          overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
        >
          <AddComment
            onSubmitCallback={() => {
              closeModal();
              toast("Uspješno poslato!", {
                position: "bottom-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

                progressStyle: customProgressStyle,
              });
            }}
          />
        </Modal>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default CommentsSection;
