import { useState, type DetailedHTMLProps, type InputHTMLAttributes } from "react";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CheckboxInput = ({ ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return <input {...rest} type="checkbox" aria-checked={isChecked ? "true" : "false"} onClick={handleCheckboxChange} />;
};
