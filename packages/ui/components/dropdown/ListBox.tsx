import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';

export type ListBoxOption = {
  label: string;
  value: string;
};

export type ListBoxProps = {
  options: ListBoxOption[];
  label?: string;
  initialText?: string;
  //onSelectChange: (selectedValue: string) => void;
};

const handleChange = (value: ReadonlyArray<ListBoxOption>, meta: ActionMeta<ListBoxOption>) => {
  console.log('value', value, 'meta', meta);
};

export const ListBox = ({ options }: ListBoxProps) => {
  const animatedComponents = makeAnimated();

  return <Select id="select" options={options} isMulti components={animatedComponents} onChange={handleChange} />;
};
