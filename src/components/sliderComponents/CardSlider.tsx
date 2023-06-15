import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

type CardSliderProps = {
    imageSrc?: string;
    cardName?: string;
  };

  const CardSlider: React.FC<CardSliderProps & { onButtonClick: (section: string) => void }> = (props) => {
    i18n.language;
    const { t } = useTranslation();

    const imageSrc = props.imageSrc !== undefined ? props.imageSrc : "";
    const cardName = props.cardName !== undefined ? props.cardName : "";

    return (
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src={imageSrc}
              draggable="false"
              alt=""
              role="presentation"
              aria-hidden="true"
            />
          </div>
          <button onClick={() => props.onButtonClick(cardName)} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t(cardName)}</h2>
          </button>
        </div>
    );
};

export default CardSlider;