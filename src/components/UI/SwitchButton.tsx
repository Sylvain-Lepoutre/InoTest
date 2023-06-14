import { RefObject } from "react";

type SwitchButtonProps = {
  isChecked: boolean;
  handleToggle: () => void;
  keyRef: RefObject<HTMLElement>;
};

const SwitchButton: React.FC<SwitchButtonProps> = (props: SwitchButtonProps) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.handleToggle}
        onKeyDown={props.handleToggle}
        aria-label="Toggle Switch"
        className="hidden"
        ref={props.keyRef}
      />
      <div className="bg-slate-900 w-14 flex justify-center items-center rounded-xl">
        <div className={`${props.isChecked ? "transform translate-x-full" : ""} text-white p-[0.1rem]`}>
          {props.isChecked ? "on" : "off"}
        </div>
        <div
          className={`${props.isChecked ? "bg-blue-500 " : "bg-white mx-1"} w-5 h-5 rounded-full ${
            props.isChecked ? "transform -translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default SwitchButton;
