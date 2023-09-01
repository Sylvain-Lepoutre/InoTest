/* eslint-disable react/no-unescaped-entities */
export const InotestIntroduction = () => {
  const pStyles = "m-10";
  const h2Styles = "text-2xl text-center";
  const liStyles = "list-disc m-2";

  return (
    <>
      <h2 className={h2Styles}>Découvrez l'inclusion en ligne : 5 Personas, 5 perspectives différentes</h2>
      <p className={pStyles}>
        Bienvenue sur Inotest, l'endroit où nous vous invitons à explorer le web sous un nouvel angle, à travers les
        yeux de ceux qui font face à des défis d'accessibilité en ligne. Notre mission est de sensibiliser à
        l'importance de l'inclusion numérique en offrant une expérience unique à travers cinq personas, chacun
        représentant un type de handicap pour lequel le web n'est pas toujours adapté.
      </p>
      <h2 className={h2Styles}>Choisissez Votre Persona de sensibilisation</h2>
      <p className={pStyles}>
        Sur Inotest, nous vous proposons de vivre cinq expériences de navigation en ligne différentes :
        <ul>
          <li className={liStyles}>
            Le Persona Visuel : Découvrez le web à travers les yeux d'une personne malvoyante. Explorez les défis liés à
            la navigation sans une vision claire et découvrez l'importance cruciale de l'accessibilité visuelle.
          </li>
          <li className={liStyles}>
            Le Persona Auditif : Plongez-vous dans le monde des utilisateurs malentendants. Découvrez comment l'absence
            de contenu sous-titré et d'informations auditives peut rendre le web inaccessible.
          </li>
          <li className={liStyles}>
            Le Persona Moteur : Faites l'expérience des frustrations auxquelles sont confrontées les personnes à
            mobilité réduite en naviguant avec des contraintes de mobilité. Explorez les défis de la navigation sans une
            utilisation aisée de la souris ou du clavier.
          </li>
          <li className={liStyles}>
            Le Persona Cognitif : Explorez le web avec une personne ayant des troubles cognitifs. Découvrez comment la
            complexité du contenu en ligne peut être un obstacle pour certains utilisateurs.
          </li>
          <li className={liStyles}>
            Le Persona Linguistique : Expérimentez les difficultés linguistiques en ligne en naviguant avec une personne
            non native dans une langue donnée. Explorez les défis liés à la barrière de la langue sur Internet.
          </li>
        </ul>
      </p>
      <h2 className={h2Styles}>Éduquer et sensibiliser</h2>
      <p className={pStyles}>
        Chacun de ces personas est conçu pour vous sensibiliser aux défis spécifiques auxquels sont confrontés certains
        utilisateurs en ligne. Vous découvrirez les obstacles qui limitent l'accès à l'information, à la communication
        et aux services pour de nombreuses personnes.
      </p>
      <h2 className={h2Styles}>Contribuez à l'inclusion numérique</h2>
      <p className={pStyles}>
        Notre objectif est de promouvoir l'inclusion numérique en sensibilisant à ces défis. Vous pouvez également
        trouver des ressources et des conseils pour améliorer l'accessibilité de votre propre site web et contribuer à
        un Internet plus inclusif.
      </p>
      <h2 className={h2Styles}>Changez de perspective</h2>
      <p className={pStyles}>
        Sur Inotest, vous pouvez passer d'un persona à une autreautre, ce qui vous permet de comprendre les défis
        auxquels sont confrontées différentes personnes en ligne.
      </p>
      <h2 className={h2Styles}>Rejoignez Notre communauté d'inclusion</h2>
      <p className={pStyles}>
        Ensemble, nous pouvons construire un web plus accessible et inclusif pour tous. L'inclusion numérique est un
        voyage collectif. Venez explorer le web à travers de nouvelles perspectives et contribuez à faire du web un
        espace plus accessible pour tous les internautes. Rejoignez-nous maintenant !
      </p>
    </>
  );
};
