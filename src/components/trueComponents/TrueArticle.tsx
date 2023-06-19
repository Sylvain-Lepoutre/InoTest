import Modal from "@components/UI/Modal";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

type TrueArticleProps = {
  style?: string;
  styleContainer?: string;
  styleSubContainer?: string;
  styleTitle?: string;
  styleSubTitle?: string;
  styleContent?: string;
  styleImageContainer?: string;
  styleTextContainer?: string;
  styleImage?: string;
  styleImageTop?: string;
  styleImageBottom?: string;
  title?: string;
  subTitle?: string;
  content?: string;
  imageSrcTop?: string;
  imageSrcBottom?: string;
};

export default function TrueArticle(props: TrueArticleProps) {
  const { t } = useTranslation();
  i18n.language;

  const style = props.style !== undefined ? props.style : "";
  const styleContainer = props.styleContainer !== undefined ? props.styleContainer : "";
  const styleSubContainer = props.styleSubContainer !== undefined ? props.styleSubContainer : "";
  const styleTitle = props.styleTitle !== undefined ? props.styleTitle : "";
  const styleSubTitle = props.styleSubTitle !== undefined ? props.styleSubTitle : "";
  const styleContent = props.styleContent !== undefined ? props.styleContent : "";
  const styleImageContainer = props.styleImageContainer !== undefined ? props.styleImageContainer : "";
  const styleTextContainer = props.styleTextContainer !== undefined ? props.styleTextContainer : "";
  const styleImage = props.styleImage !== undefined ? props.styleImage : "";
  const styleImageTop = props.styleImageTop !== undefined ? props.styleImageTop : "";
  const styleImageBottom = props.styleImageBottom !== undefined ? props.styleImageBottom : "";
  const title = props.title !== undefined ? props.title : "";
  const subTitle = props.subTitle !== undefined ? props.subTitle : "";
  const content = props.content !== undefined ? props.content : "";
  const imageSrcTop = props.imageSrcTop !== undefined ? props.imageSrcTop : "";
  const imageSrcBottom = props.imageSrcBottom !== undefined ? props.imageSrcBottom : "";

  return (
    <article className={style}>
      <div className={styleContainer}>
        <div className={styleSubContainer}>
          <div className={styleImageContainer}>
            <div className={styleImage}>
              <img className={styleImageTop} src={imageSrcTop} alt="" aria-hidden="true" role="presentation" />
              <Modal
                buttonText="✓"
                modalContent={t("images-right")}
                style="text-black mt-3 md:mt-0 place-self-center"
              />
              <img className={styleImageBottom} src={imageSrcBottom} alt="" aria-hidden="true" role="presentation" />
            </div>
          </div>

          <section className={styleTextContainer}>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <h1 className={styleTitle}>{title}</h1>
              <Modal buttonText="✓" modalContent={t("title-right")} style="text-black" />
            </div>
            <h2 className={styleSubTitle}>{subTitle}</h2>
            <p className={styleContent}>{content}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
