import { t } from "i18next";

import ContactCardsLayout from "./components/ContactCardsLayout";
import ContactFormLayout from "./components/ContactFormLayout";

const ContactUsPage = () => {
  return (
    <div className="container lg:px-24 flex flex-col py-10 px-4">
      <p className="text-2xl mb-4">{t("contactPage.title")}</p>
      <p>{t("contactPage.subtitle1")}</p>
      <p className="mb-10 mt-2">{t("contactPage.subtitle2")}</p>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <ContactCardsLayout />
        <ContactFormLayout />
      </div>
    </div>
  );
};

export default ContactUsPage;
