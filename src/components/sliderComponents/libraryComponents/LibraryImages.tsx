export default function LibraryImages() {
  return (
    <section className="windowStyle md:mt-0 p-6 w-[87vw]">
      <div className="flex md:flex-row flex-col gap-5 md:justify-between justify-center items-center">
        <div>
          <h2>Image décorative :</h2>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1687085932670-7cd128666507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </div>
        <div>
          <h2>Image informatives :</h2>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Graphiques des utilisateurs des 7 derniers jours"
          />
        </div>
        <div>
          <h2>Image fonctionnelles :</h2>
          <a href="https://www.w3.org/" target="blank">
            <img
              className="bg-white w-96 h-30 object-cover"
              src="https://www.w3.org/WAI/content-images/wai-tutorials/images/w3c.png"
              alt="W3C home"
            />
          </a>
        </div>
        <div>
          <h2>Image de texte :</h2>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRleHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="Live, Work, Create."
          />
        </div>
        <div>
          <h2>Image détaillés :</h2>
          <img
            className="w-96 h-52 object-cover"
            src="https://www.w3.org/WAI/content-images/wai-tutorials/images/chart.png"
            alt="Diagramme à barres montrant les visiteurs mensuels et totaux pour le premier trimestre 2014 pour les sites 1 à 3"
          />
        </div>
      </div>
    </section>
  );
}
