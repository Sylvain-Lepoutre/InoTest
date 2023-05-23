export default function Home() {
  return (
    <>
      <header>
        <p className="text-3xl font-bold underline">Hello World !</p>
      </header>
      <li>
        <a href={`/page1`}>page1</a>
      </li>
      <li>
        <a href={`/page2`}>page2</a>
      </li>
    </>
  );
}
