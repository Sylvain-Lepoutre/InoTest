interface SelectMenuProps {
  style: string;
}

const SelectMenu: React.FC = (props: SelectMenuProps) => {
  return (
    <div>
      <select className={`${props.style}`}>
        <option tabIndex={0}>New Mexico</option>
        <option tabIndex={0}>Missouri</option>
        <option tabIndex={0}>Texas</option>
      </select>
    </div>
  );
};

export default SelectMenu;
