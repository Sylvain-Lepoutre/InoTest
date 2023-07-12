import { useTranslation } from "react-i18next";

const LibraryNavBar = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="windowStyle rounded-md h-[10vh] flex justify-end items-center w-[87vw]">
        <ul className="menu flex items-start">
          <li>
            <div className="block px-4 py-2" aria-current="page">
              {t("nav-home")}
            </div>
          </li>
          <li>
            <div href="#" className="block px-4 py-2">
              {t("nav-about")}
            </div>
          </li>
          <li>
            <div href="#" className="block px-4 py-2">
              Contact
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LibraryNavBar;
