import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const MenuItems = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const links = [
    { href: "/", title: t("homePage") },
    { href: "/posts", title: t("postsPage") },
    { href: "/about", title: t("aboutPage") },
    { href: "/contact", title: t("contactPage") },
  ];

  console.log(`${location.pathname}`);
  return (
    <div
      className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
      id="mobile-menu-3"
    >
      <ul className="flex-col md:flex-row flex md:space-x-2 mt-4 ml-2 md:mt-0 md:text-sm ">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={
                "block hover:text-white hover:bg-[#24252f] px-2 py-2 rounded-sm "
              }
              aria-current={link.title === "HOME" ? "page" : undefined}
              style={{
                fontSize: "1.25rem",
                backgroundColor:
                  location.pathname === link.href ? "#24252f" : "",
                color: location.pathname === link.href ? "white" : "",
              }}
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
