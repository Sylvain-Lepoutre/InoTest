export default `<Menu aria-label="Accessibility menu" className="flex justify-center h-[5rem] items-center">
<Menu.SelectList className="h-[4rem] flex ">
  <Menu.Select
    labelStyle="navStyle"
    label="Change the font size"
    option="fontSize"
    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
  >
    <Menu.Option value="Default">Default</Menu.Option>
    <Menu.Option value="Large">Large</Menu.Option>
    <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
  </Menu.Select>
  <Menu.Select
    labelStyle="navStyle"
    label="Change the line spacing"
    option="line"
    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
  >
    <Menu.Option value="Default">Default</Menu.Option>
    <Menu.Option value="Large">Large</Menu.Option>
    <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
  </Menu.Select>
  <Menu.Select
    labelStyle="navStyle"
    label="Display images"
    option="image"
    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
  >
    <Menu.Option value="visible">visible</Menu.Option>
    <Menu.Option value="hidden">hidden</Menu.Option>
  </Menu.Select>
  <Menu.Select
    labelStyle="navStyle"
    label="Change the font"
    option="fontChange"
    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
  >
    <Menu.Option value="Basis, arial">Default</Menu.Option>
    <Menu.Option value="Georgia, serif">Georgia</Menu.Option>
    <Menu.Option value="fantasy">Fantasy</Menu.Option>
    <Menu.Option value="cursive">Cursive</Menu.Option>
  </Menu.Select>
</Menu.SelectList>
</Menu>`;
