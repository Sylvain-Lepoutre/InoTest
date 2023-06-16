export default `import { useState } from "react";

const LibrarySwitch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleSwitch}
        onKeyDown={() => {
          event.key === "Enter" || (event.key === "space" && handleSwitch);
        }}
        aria-label="Toggle Switch"
        className="bg-slate-900 w-16 flex justify-center items-center mx-1 rounded-xl"
      >
        <div className={\`\$text-white py-[0.3rem] \${isChecked ? "translate-x-full" : ""}\`}>
          {isChecked ? "on" : "off"}
        </div>
        <div className={\`\$w-5 h-5 rounded-full \${isChecked ? "bg-blue-500 -translate-x-full" : "bg-white"}\`}></div>
      </button>
    </>
  );
};

export default LibrarySwitch;
`;
