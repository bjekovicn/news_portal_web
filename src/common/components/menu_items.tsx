import { useTranslation } from "react-i18next";

const MenuItems = () => {
  const { t } = useTranslation();
  const links = [
    { href: "/", title: t("homePage") },
    { href: "/posts", title: t("postsPage") },
    { href: "#", title: t("aboutPage") },
    { href: "#", title: t("contactPage") },
  ];

  return (
    <div
      className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
      id="mobile-menu-3"
    >
      <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="block hover:text-white hover:bg-[#24252f] px-2 py-2 rounded-sm"
              aria-current={link.title === "HOME" ? "page" : undefined}
              style={{ fontSize: "1.25rem" }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
