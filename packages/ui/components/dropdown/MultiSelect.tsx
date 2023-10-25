import { ChakraStylesConfig, Select } from 'chakra-react-select';
import { useRef, useState } from 'react';
import { InputAction } from 'react-select';

export type Option = {
  value: number | string;
  label: string;
};

export const MultiSelect = (props: any) => {
  const [selectInput, setSelectInput] = useState<string>('');
  const isAllSelected = useRef<boolean>(false);
  const selectAllLabel = useRef<string>('Select all');
  const allOption = { value: '*', label: selectAllLabel.current };

  const chakraStyles: ChakraStylesConfig = {
    valueContainer: (provided) => ({
      ...provided,
      px: 2,
    }),
  };

  const filterOptions = (options: Option[], input: string) => options?.filter(({ label }: Option) => label.toLowerCase().includes(input.toLowerCase()));
  const comparator = (v1: Option, v2: Option) => (v1.value as number) - (v2.value as number);

  const filteredOptions = filterOptions(props.options, selectInput);
  const filteredSelectedOptions = filterOptions(props.value, selectInput);

  const customFilterOption = ({ value, label }: Option, input: string) => (value !== '*' && label.toLowerCase().includes(input.toLowerCase())) || (value === '*' && filteredOptions?.length > 0);

  const onInputChange = (inputValue: string, event: { action: InputAction }) => {
    if (event.action === 'input-change') setSelectInput(inputValue);
    else if (event.action === 'menu-close' && selectInput !== '') setSelectInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === ' ' || e.key === 'Enter') && !selectInput) e.preventDefault();
  };

  const handleChange = (selected: Option[]) => {
    if (selected.length > 0 && !isAllSelected.current && (selected[selected.length - 1].value === allOption.value || JSON.stringify(filteredOptions) === JSON.stringify(selected.sort(comparator))))
      return props.onChange(
        [...(props.value ?? []), ...props.options.filter(({ label }: Option) => label.toLowerCase().includes(selectInput?.toLowerCase()) && (props.value ?? []).filter((opt: Option) => opt.label === label).length === 0)].sort(comparator)
      );
    else if (selected.length > 0 && selected[selected.length - 1].value !== allOption.value && JSON.stringify(selected.sort(comparator)) !== JSON.stringify(filteredOptions)) return props.onChange(selected);
    else if (props.value != null) return props.onChange([...(props.value.filter(({ label }: Option) => !label.toLowerCase().includes(selectInput?.toLowerCase())) ?? [])]);
  };

  if (props.isSelectAll && props.options.length !== 0) {
    isAllSelected.current = JSON.stringify(filteredSelectedOptions) === JSON.stringify(filteredOptions);

    if (filteredSelectedOptions.length > 0) {
      if (filteredSelectedOptions.length === filteredOptions.length) selectAllLabel.current = `All (${filteredOptions.length}) selected`;
      else selectAllLabel.current = `${filteredSelectedOptions.length} / ${filteredOptions.length} selected`;
    } else selectAllLabel.current = 'Select all';

    allOption.label = selectAllLabel.current;

    return (
      <Select
        {...props}
        colorScheme="primary"
        onKeyDown={onKeyDown}
        options={[allOption, ...props.options]}
        onChange={handleChange}
        selectedOptionColorScheme="purple"
        selectedOptionStyle="check"
        filterOption={customFilterOption}
        chakraStyles={chakraStyles}
        menuPlacement={props.menuPlacement ?? 'auto'}
        isMulti
        closeMenuOnSelect={false}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
        hideSelectedOptions={true}
        blurInputOnSelect={false}
        isSearchable={false}
        tagVariant="subtle"
        useBasicStyles
      />
    );
  }

  return (
    <Select
      {...props}
      inputValue={selectInput}
      onInputChange={onInputChange}
      filterOption={customFilterOption}
      colorScheme="primary"
      selectedOptionColorScheme="purple"
      components={{
        ...props.components,
      }}
      menuPlacement={props.menuPlacement ?? 'auto'}
      onKeyDown={onKeyDown}
      tabSelectsValue={false}
      hideSelectedOptions={false}
      backspaceRemovesValue={false}
      blurInputOnSelect={true}
    />
  );
};

export default MultiSelect;
