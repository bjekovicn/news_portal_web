import { t } from "i18next";

const ContactFormLayout = () => {
  return (
    <div className="flex flex-1">
      <form onSubmit={() => {}}>
        <div className="border-gray-100 border-solid border-2 p-2 gap-2 py-2 flex flex-col items-center">
          <input
            placeholder={t("contactPage.formContact.name")}
            className="text-black px-4 py-2  border border-gray-200 border-solid w-full"
            // {...register("name")}
          />
          {/* {errors.name && <span>{errors.name.message}</span>} */}

          <textarea
            rows={6}
            placeholder={t("contactPage.formContact.question")}
            className="border border-gray-200 border-solid px-4 py-2 w-full resize-none"
            // {...register("content")}
          />
          {/* {errors.content && <span>{errors.content.message}</span>} */}
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
