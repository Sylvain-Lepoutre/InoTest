import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

const LibrarySwitch = () => {
  const { t } = useTranslation();
  i18n.language;

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <section className="md:mt-0 p-6 w-[87vw] flex items-center justify-center">
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          onClick={handleSwitch}
          onKeyDown={() => {
            event.key === "Enter" || (event.key === "space" && handleSwitch);
          }}
          aria-label={t("aria-switch")}
          className="bg-slate-900 w-16 flex justify-center items-center mx-1 rounded-xl"
        >
          <div className={`text-white py-[0.3rem] ${isChecked ? "translate-x-full" : ""}`}>
            {isChecked ? "on" : "off"}
          </div>
          <div className={`w-5 h-5 rounded-full ${isChecked ? "bg-blue-500 -translate-x-full" : "bg-white"}`}></div>
        </button>
      </section>
    </>
  );
};

export default LibrarySwitch;
