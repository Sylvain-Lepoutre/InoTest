import type { DetailedHTMLProps, FieldsetHTMLAttributes } from "react";

type Props = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;

export const CheckboxMenu = ({ legendContent, ...rest }: Props) => {
  return (
    <fieldset {...rest}>
      <legend>{legendContent}</legend>

      <div>
        <input type="checkbox" id="choice1" name="choice1" value={choice1} />
        <label htmlFor="choice1">Choice 1</label>
      </div>

      <div>
        <input type="checkbox" id="choice2" name="choice2" value={choice2} />
        <label htmlFor="choice2">Choice 2</label>
      </div>
    </fieldset>
  );
};
