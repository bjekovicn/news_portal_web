import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { t } from "i18next";

const ContactCardsLayout = () => {
  return (
    <div className="flex flex-col flex-1">
      <ContactCard
        title="INSTAGRAM"
        subtitle={t("contactPage.cardsContact.instagram")}
        link={t("portalInstagram")}
      >
        <FaInstagram size={36} />
      </ContactCard>
      <ContactCard
        title="EMAIL"
        subtitle={t("contactPage.cardsContact.email")}
        link={t("portalEmail")}
      >
        <FaEnvelope size={36} />
      </ContactCard>
      <ContactCard
        title="FACEBOOK"
        subtitle={t("contactPage.cardsContact.facebook")}
        link={t("portalFacebook")}
      >
        <FaFacebook size={36} />
      </ContactCard>
    </div>
  );
};

export default ContactCardsLayout;
