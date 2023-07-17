export type OptionButton = "font" | "lineSpacing";

export const Button = ({ children }: Props) => {
  return (
    <select>
      <option value="select a option">select an option</option>
      <option value="small">small</option>
      <option value="medidum">medium</option>
      <option value="large">large</option>
      {children}
    </select>
  );
};
