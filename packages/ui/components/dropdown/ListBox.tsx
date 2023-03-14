import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';

export type ListBoxOption = {
  label: string;
  value: string;
};

export type ListBoxProps = {
  id: string;
  options: ListBoxOption[];
  label?: string;
  initialText?: string;
  onSelectChange: (selectedValues: ReadonlyArray<ListBoxOption>, action: ActionMeta<ListBoxOption>) => void;
};

export const ListBox = ({ id, options, onSelectChange }: ListBoxProps) => {
  const handleChange = (value: ReadonlyArray<ListBoxOption>, meta: ActionMeta<ListBoxOption>) => {
    onSelectChange(value, meta);
  };

  const animatedComponents = makeAnimated();

  return <Select id={id} instanceId={id} options={options} isMulti components={animatedComponents} onChange={handleChange} />;
};
