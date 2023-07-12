import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CardContentProps = {
  cardName?: string;
  libraryComponent?: ReactNode;
  componentCode?: string;
  dash1?: string;
  dash2?: string;
  dash3?: string;
  dash4?: string;
};

const CardSliderContent = (props: CardContentProps) => {
  const { t } = useTranslation();

  return (
    <article className="rounded-lg element">
      <div className="overflow-auto flex flex-col h-[70vh] bg-transparent relative cardscroll w-[90vw] overflow-x-hidden">
        <div className="flex flex-col items-center relative">
          <div>
            <h2 className="pt-3 mb-2 ml-6 text-left text-4xl font-bold title items-start">{props.cardName}</h2>
            <div className="px-6 mb-2">{props.libraryComponent}</div>
          </div>
          <div className="w-[90vw] title px-6">
            <div className="pb-6">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {props.componentCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 title">
          <section className="rounded-lg px-16 text-lg" aria-label="accessibility guideline" tabIndex={0}>
            <p className="mb-4">{t("code-pres")}</p>
            <ul className="list-disc pl-6">
              <li className="mb-3">{props.dash1}</li>
              <li className="mb-3">{props.dash2}</li>
              <li className="mb-3">{props.dash3}</li>
              <li className="mb-3">{props.dash4}</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CardSliderContent;
