/* eslint-disable jsx-a11y/alt-text */
import ModalButton from "@components/UI/Modal";

type FakeArticleProps = {
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

export default function FakeArticle(props: FakeArticleProps) {
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
    <section className={style}>
      <div className={styleContainer}>
        <div className={styleSubContainer}>
          <div className={styleImageContainer}>
            <div className={styleImage}>
              <img className={styleImageTop} src={imageSrcTop} />
              <ModalButton
                buttonText="!"
                modalContent="Images do not have the following attributes: alt='' aria-hidden='true' role='presentation'."
                style="text-black mt-3 md:mt-0 place-self-center"
              />
            <img className={styleImageBottom} src={imageSrcBottom} />
            </div>
          </div>

          <div className={styleTextContainer}>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <h4 className={styleTitle}>{title}</h4>
              <ModalButton
                buttonText="!"
                modalContent="The semantic hierarchy of title tags is inconsistent."
                style="text-black"
              />
            </div>
            <h2 className={styleSubTitle}>{subTitle}</h2>
            <p className={styleContent}>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
