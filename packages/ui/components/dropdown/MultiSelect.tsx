import { Select } from 'chakra-react-select';

export type Option = {
  value: number | string;
  label: string;
};

export const MultiSelect = (props: any) => {
  return (
    <Select
      {...props}
      options={[...props.options]}
      components={{
        ...props.components,
      }}
      menuPlacement={props.menuPlacement ?? 'auto'}
      isMulti
      closeMenuOnSelect={false}
      tabSelectsValue={false}
      backspaceRemovesValue={false}
      hideSelectedOptions={false}
      blurInputOnSelect={false}
      selectedOptionStyle="check"
      isSearchable={false}
    />
  );
};

export default MultiSelect;
