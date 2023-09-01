import { useState, type DetailedHTMLProps, type FieldsetHTMLAttributes, type ChangeEvent } from "react";

type Props = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;

export const CheckboxMenu = ({ legendContent, ...rest }: Props) => {
  const choicesName = "Test";
  const choicesList = ["TestChoice1", "TestChoice2", "TestChoice3"];

  const [checkedState, setCheckedState] = useState(new Array(choicesList.length).fill(false));
  console.log(checkedState);

  const handleOnChange = (event: ChangeEvent) => {
    console.log(event.target.value);

    console.log("test");
  };

  return (
    <fieldset {...rest}>
      <legend>Veuillez choisir un {choicesName}</legend>

      {choicesList.map((choice, index) => {
        return (
          <div key={index}>
            <input type="checkbox" id={choice} name={choicesName} value={choice} onChange={handleOnChange} />
            <label htmlFor={choice}>{choice}</label>
          </div>
        );
      })}
    </fieldset>
  );
};
