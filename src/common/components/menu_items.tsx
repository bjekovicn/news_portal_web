import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// import logo from "../../assets/logo-footer.png";

const MenuItems = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", title: t("homePage") },
    { href: "/posts", title: t("postsPage") },
    { href: "/about", title: t("aboutPage") },
    { href: "/contact", title: t("contactPage.menuTitle") },
  ];

  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="w-full relative">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center ml-2 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
        >
          {<FaBars className="h-6 w-6 text-[#24252f]" />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Mobile drawer menu */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#24252f] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden w-1/2 h-full z-50 flex flex-col justify-between`}
      >
        <ul className="flex flex-col mt-4 ml-2 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={"block text-white px-4 py-2 rounded"}
                aria-current={link.title === "HOME" ? "page" : undefined}
                style={{
                  fontSize: "1.25rem",
                  backgroundColor:
                    location.pathname === link.href ? "#3a3b45" : "",
                }}
                onClick={closeDrawer}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className="mb-4">
          <img src={logo} alt="Your Alt Text" className="w-full" />
        </div> */}
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
        <ul className="flex-col md:flex-row flex mt-4 ml-2 md:mt-0 md:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  "block hover:text-white hover:bg-[#24252f] px-4 py-2"
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
    </div>
  );
};

export default MenuItems;
