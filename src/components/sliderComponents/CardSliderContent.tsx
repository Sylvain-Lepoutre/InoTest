import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CardContentProps = {
  cardName?: string;
  libraryComponent?: React.ReactNode;
  componentCode?: string;
  dash1?: string;
  dash2?: string;
  dash3?: string;
  dash4?: string;
};

const CardSliderContent = (props: CardContentProps) => {
  i18n.language;
  const { t } = useTranslation();

  const imageSrc = props.imageSrc !== undefined ? props.imageSrc : "";
  const cardName = props.cardName !== undefined ? props.cardName : "";
  const libraryComponent = props.libraryComponent !== undefined ? props.libraryComponent : "";
  const dash1 = props.dash1 !== undefined ? props.dash1 : "";
  const dash2 = props.dash2 !== undefined ? props.dash2 : "";
  const dash3 = props.dash3 !== undefined ? props.dash3 : "";
  const dash4 = props.dash4 !== undefined ? props.dash4 : "";

  return (
    <div className="rounded-lg element">
      <div className="overflow-auto flex flex-col w-screen h-[70vh] bg-transparent relative">
        <div className="flex flex-col items-center relative">
          <div>
            <h2 className="pt-3 mb-2 ml-6 text-left text-4xl font-bold title items-start">{cardName}</h2>
            <div className="px-6 mb-2">{libraryComponent}</div>
          </div>
          <div className="w-[90vw] title px-6">
            <div className="pb-6">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {props.componentCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="rounded-lg px-16 text-lg">
            <p className="mb-4">
              Ce code est conçu pour rendre votre site web accessible aux utilisateurs, y compris ceux qui ont des
              limitations visuelles ou motrices. Les bonnes pratiques d'accessibilité ont été prises en compte pour
              offrir une expérience inclusive à tous les utilisateurs. Voici comment cela est réalisé :
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-3">{dash1}</li>
              <li className="mb-3">{dash2}</li>
              <li className="mb-3">{dash3}</li>
              <li className="mb-3">{dash4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSliderContent;
