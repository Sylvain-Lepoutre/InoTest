/* eslint-disable jsx-a11y/alt-text */
type FakeArticleProps = {
  style?: string;
  styleContainer?: string;
  styleSubContainer?: string;
  styleTitle?: string;
  styleContent?: string;
  styleImageContainer?: string;
  styleTextContainer?: string;
  styleImage?: string;
  styleImageTop?: string;
  styleImageBottom?: string;
  title?: string;
  content?: string;
  imageSrcTop?: string;
  imageSrcBottom?: string;
};

export default function FakeArticle(props: FakeArticleProps) {
  const style = props.style !== undefined ? props.style : "";
  const styleContainer = props.styleContainer !== undefined ? props.styleContainer : "";
  const styleSubContainer = props.styleSubContainer !== undefined ? props.styleSubContainer : "";
  const styleTitle = props.styleTitle !== undefined ? props.styleTitle : "";
  const styleContent = props.styleContent !== undefined ? props.styleContent : "";
  const styleImageContainer = props.styleImageContainer !== undefined ? props.styleImageContainer : "";
  const styleTextContainer = props.styleTextContainer !== undefined ? props.styleTextContainer : "";
  const styleImage = props.styleImage !== undefined ? props.styleImage : "";
  const styleImageTop = props.styleImageTop !== undefined ? props.styleImageTop : "";
  const styleImageBottom = props.styleImageBottom !== undefined ? props.styleImageBottom : "";
  const title = props.title !== undefined ? props.title : "";
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
              <img className={styleImageBottom} src={imageSrcBottom} />
            </div>
          </div>

          <div className={styleTextContainer}>
            <h2 className={styleTitle}>{title}</h2>
            <p className={styleContent}>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
