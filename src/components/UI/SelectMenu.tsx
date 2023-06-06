import { RefObject, useRef, useState } from "react";
import useFocus from "../../hook/useFocus";

interface SelectMenuProps {
  style: string;
}

const SelectMenu: React.FC = (props: SelectMenuProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const optionsRefs: RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const { verticalFocus } = useFocus(optionsRefs);

  const handleSelect = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <select className={`${props.style}`} aria-expanded={isExpanded ? "true" : "false"} onClick={handleSelect}>
        <option
          onKeyDown={() => {
            verticalFocus(event);
          }}
          ref={optionsRefs[0]}
          tabIndex={0}
        >
          New Mexico
        </option>
        <option
          onKeyDown={() => {
            verticalFocus(event);
          }}
          ref={optionsRefs[1]}
          tabIndex={0}
        >
          Missouri
        </option>
        <option
          onKeyDown={() => {
            verticalFocus(event);
          }}
          ref={optionsRefs[2]}
          tabIndex={0}
        >
          Texas
        </option>
      </select>
    </div>
  );
};

export default SelectMenu;
