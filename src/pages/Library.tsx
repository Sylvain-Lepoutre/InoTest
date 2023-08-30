import TextReveal from "@components/UI/TextReveal";
import GridLayout from "@components/UI/LibraryComponents";

import { useTranslation } from "react-i18next";
import { CheckboxMenu } from "@components/sliderComponents/libraryComponents/CheckboxMenu/Checkbox";

export const Library = () => {
  const { t } = useTranslation();
  return (
    <section id="main">
      <CheckboxMenu legendContent="Test" className="p-4" />
      <TextReveal />
      <div className="flex flex-col gap-6 max-w-3xl ml-5 p-6 mt-0 items-start reveal">
        <h2 className="title text-3xl md:text-4xl xl:text-5xl lg:text-5xl font-semibold">{t("library-title")}</h2>
        <p className="title text-xl">{t("library-content")}</p>
      </div>{" "}
      <article className="flex flex-col items-center justify-end overflow-x-hidden">
        <GridLayout />
      </article>
    </section>
  );
};
