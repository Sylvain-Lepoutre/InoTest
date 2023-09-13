import { createContext, useContext, useId, type DetailedHTMLProps, type FieldsetHTMLAttributes } from "react";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxLegend } from "./CheckboxLegend";
import { CheckboxInput } from "./CheckboxInput";

type Props = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;

const IdContext = createContext<ReturnType<typeof useId> | null>(null);

export const useCheckbox = () => {
  const id = useContext(IdContext);

  if (id === null) {
    throw new Error(""); //TODO error message
  }

  return {
    id,
  };
};

export const Checkbox = ({ children, ...rest }: Props) => {
  const id = useId();
  return (
    <fieldset {...rest} aria-labelledby={id}>
      <IdContext.Provider value={id}>{children}</IdContext.Provider>
    </fieldset>
  );
};

Checkbox.Label = CheckboxLabel;
Checkbox.Legend = CheckboxLegend;
Checkbox.Input = CheckboxInput;
