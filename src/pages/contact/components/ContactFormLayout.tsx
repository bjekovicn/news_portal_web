import emailjs from "@emailjs/browser";

import { t } from "i18next";
import { Bounce, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  PostFormMessageSchema,
  PostFormMessageSchemaType,
} from "../../../schemas/post-form-message-schema";

const ContactFormLayout = () => {
  const onSubmit: SubmitHandler<PostFormMessageSchemaType> = (data) => {
    //
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data
      )
      .then(() => {
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
        reset();
      })
      .catch(() => {
        //
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormMessageSchemaType>({
    resolver: zodResolver(PostFormMessageSchema),
  });

  return (
    <div className="flex flex-1 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" shadow-lg bg-gray-200 bg-opacity-20 p-2 gap-2 py-4 px-6 flex flex-col items-center">
          <p className="text-lg py-1 text-gray-500">
            {t("contactPage.formContact.contactUsAnonymously")}
          </p>
          <textarea
            rows={6}
            placeholder={t("contactPage.formContact.question")}
            className="border border-gray-200 border-solid px-4 py-2 w-full resize-none"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <p className="text-gray-500 text-sm">
            {t("contactPage.formContact.description")}
          </p>
          <button
            type="submit"
            className="text-white px-4 bg-pink-600 py-2 mt-8 w-full"
          >
            {t("addComment.sendComment")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormLayout;
