type Props = {
  label: string;
  linkForLast?: boolean;
  path: string;
  styles?: {
    nav?: string;
    ol?: string;
    li?: string;
    a?: {
      interactive?: string;
      nonInteractive?: string;
    };
  };
};

export const Breadcrumb = ({ label, linkForLast = true, path, styles }: Props) => {
  const pathElements = path.split("/").filter((element) => element !== "");

  return (
    <nav aria-label={label} className={styles?.nav}>
      <ol className={styles?.ol}>
        <li className={styles?.li}>
          <a className={styles?.a?.interactive} href="/">
            Home
          </a>
        </li>
        {pathElements.map((element, index) => (
          <li className={styles?.li} key={index}>
            <span aria-hidden> / </span>
            {index === pathElements.length - 1 ? (
              linkForLast ? (
                <a
                  aria-current="page"
                  className={styles?.a?.interactive}
                  href={`/${pathElements.slice(0, index + 1).join("/")}`}
                >
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </a>
              ) : (
                <span className={styles?.a?.nonInteractive}>{element.charAt(0).toUpperCase() + element.slice(1)}</span>
              )
            ) : (
              <a className={styles?.a?.interactive} href={`/${pathElements.slice(0, index + 1).join("/")}`}>
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
