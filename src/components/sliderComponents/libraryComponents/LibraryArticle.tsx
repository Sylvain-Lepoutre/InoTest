export default function LibraryArticle() {
  return (
    <article className="windowStyle md:mt-0 p-6 w-[87vw]">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 md:mt-[-2.5em]">
        <div className="grid items-center md:grid-cols-2 md:gap-x-20">
          <div className="md:block flex flex-col items-center">
            <div className="md:block flex flex-col relative max-w-xs">
              <img
                className="hidden md:block object-bottom rounded-md scale-75 object-cover h-[22rem]"
                src="https://picsum.photos/id/112/200/300"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              <img
                className="md:absolute md:origin-bottom-right scale-75 md:scale-75 rounded  md:-bottom-2 md:-right-12"
                src="https://picsum.photos/id/103/300/200"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
            </div>
          </div>

          <section>
            <div className="flex flex-col md:flex-row md:items-start items-center">
              <h1 className="text-3xl md:text-left font-bold leading-tight sm:text-4xl lg:text-5xl">Lorem</h1>
            </div>
            <h2 className="text-xl text-center md:text-left font-bold leading-tight sm:text-2xl lg:text-3xl mt-2">
              Ipsum dolor
            </h2>
            <p className="mt-6 md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, libero, consequuntur dignissimos
              impedit quasi cumque, vitae aspernatur eius corporis voluptatibus inventore sapiente recusandae aut
              distinctio hic placeat accusantium nobis provident?
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
