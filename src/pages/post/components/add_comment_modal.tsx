import React from "react";
import Modal from "react-modal";
import AddComment from "./add_comments";

import { Bounce, ToastContainer, toast } from "react-toastify";
import { t } from "i18next";

const AddCommentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  postId: number;
  commentId: number;
}> = ({ isOpen, onClose, postId, commentId }) => {
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onClose}
        className="absolute top-0 left-0 right-0 bottom-0 m-auto h-min  max-w-md mx-8 md:mx-auto content-center bg-white p-2"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      >
        <AddComment
          commentId={commentId}
          postId={postId}
          onSubmitCallback={() => {
            onClose();
            toast(t("successfullySent"), {
              position: "bottom-right",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              progressStyle: { background: "#d22477" },
            });
          }}
        />
      </Modal>
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

export default AddCommentModal;
