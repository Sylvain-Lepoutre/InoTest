import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold my-7">404 ERROR</h1>
        <p className="my-3">Sorry, an unexpected error has occurred.</p>
        <p className="my-3">
          <i> Page {error.statusText || error.message}</i>
        </p>
        <a className="hover:font-bold" href="/">
          Go back home
        </a>
      </div>
    </div>
  );
}
