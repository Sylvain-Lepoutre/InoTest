import RightModalButton from "@components/UI/RightModal";
import SelectMenu from "@components/UI/SelectMenu";

export default function TrueForm() {
  return (
    <>
    <form className="w-full max-w-lg md:p-0 px-6" action="#" method="post">
        <RightModalButton
          buttonText="✓"
          modalContent="The tags used in the form are semantically correct. For example there is label tags wrapping the input tags and there is a form tag."
          style="text-black ml-24 mb-2 md:mt-0 place-self-center"
        />
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-first-name" className="block uppercase tracking-wide formTitle text-xs font-bold mb-2">
                First Name
            </label>
            <input
                id="grid-first-name"
                type="text"
                placeholder="John"
                className="appearance-none block w-full formStyle border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            />
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label htmlFor="grid-last-name" className="block uppercase tracking-wide formTitle formTitle text-xs font-bold mb-2">
                Last Name
            </label>
            <input
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                className="appearance-none block w-full formStyle border rounded py-3 px-4 leading-tight focus:outline-none"
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label htmlFor="grid-message" className="block uppercase tracking-wide formTitle text-xs font-bold mb-2">
                Message
            </label>
            <textarea
                id="grid-message"
                type="message"
                placeholder="Hello there !"
                className="appearance-none block w-full formStyle border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-city" className="block uppercase tracking-wide formTitle text-xs font-bold mb-2">
                City
            </label>
            <input
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                className="appearance-none block w-full formStyle border rounded py-3 px-4 leading-tight focus:outline-none"
            />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide formTitle text-xs font-bold mb-2">
                State
            </label>
            <div className="relative">
                <SelectMenu style="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight focus:outline-none formStyle" />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 formTitle">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide formTitle text-xs font-bold mb-2">
                Zip
            </label>
            <input
                id="grid-zip"
                type="text"
                placeholder="90210"
                className="appearance-none block w-full formStyle border rounded py-3 px-4 leading-tight"
            />
            </div>
            <div class="flex flex-row gap-20 md:w-full md:mt-6 ml-3">
                <button type="submit" class="cursor-pointer shadow formStyle focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded hover:scale-110 transform transition-transform duration-200">Send form</button>
                <RightModalButton
                    buttonText="✓"
                    modalContent="The select menu have the aria-expanded attribute."
                    style="text-black md:mt-0 place-self-center"
                />
            </div>
        </div>
    </form>
    </>
  );
}
