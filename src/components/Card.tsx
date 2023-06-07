type CardProps = {
    style?: string;
  }

export default function Card(props: CardProps) {
    const style = props.style !== undefined ? props.style : "";

    return (
        <section className={style}>
            <div>
                <img src="https://picsum.photos/id/209/300/200" alt="" aria-hidden="true" role="presentation" />
            </div>
            <div className="pt-2">
                <h3 className="font-bold text-xl">Card Title</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In labore assumenda recusandae debitis quis deleniti odio aperiam itaque.</p>
            </div>
            <div className="mt-1">
                <button className="bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.1] transform transition-transform duration-200 p-2">Read more</button>
            </div>
        </section>
    )
}