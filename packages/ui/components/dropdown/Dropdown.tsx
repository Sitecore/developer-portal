export type DropDownOption = {
  text: string;
  value: string;
  selected?: boolean;
};

type DropDownProps = {
  options: DropDownOption[];
  label?: string;
  initialText?: string;
  onSelectChange: (selectedValue: string) => void;
};

export const Dropdown = ({ options, label, initialText, onSelectChange }: DropDownProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  const dropdownElement = (
    <select onChange={handleChange} className="bg-theme-bg border-theme-border-alt text-theme-text mr-2 border-2 p-2 text-sm">
      {initialText && <option value="">{initialText}</option>}

      {options.map((item, index) => {
        return (
          <option value={item.value} key={index} selected={item.selected}>
            {item.text}
          </option>
        );
      })}
    </select>
  );

  if (label) {
    return <label className="flex items-center text-xs font-semibold">{dropdownElement}</label>;
  }

  return dropdownElement;
};
