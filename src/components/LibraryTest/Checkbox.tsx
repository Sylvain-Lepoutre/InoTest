import { Checkbox as GenericCheckbox } from "@components/sliderComponents/libraryComponents/Checkbox/Checkbox";

export const Checkbox = () => {
  return (
    <GenericCheckbox data-testid="checkbox">
      <GenericCheckbox.Legend>Test</GenericCheckbox.Legend>
      <GenericCheckbox.Label htmlFor="box1">
        <GenericCheckbox.Input id="box1" />
        Case1
      </GenericCheckbox.Label>
      <GenericCheckbox.Label htmlFor="box2">
        <GenericCheckbox.Input id="box2" />
        Case2
      </GenericCheckbox.Label>
    </GenericCheckbox>
  );
};
