import clsx from 'clsx';
import { useRef, useState } from 'react';
import { components, default as ReactSelect, InputAction } from 'react-select';

export type Option = {
  value: number | string;
  label: string;
};

export const MultiSelect = (props: any) => {
  const [selectInput, setSelectInput] = useState<string>('');
  const isAllSelected = useRef<boolean>(false);
  const selectAllLabel = useRef<string>('Select all');
  const allOption = { value: '*', label: selectAllLabel.current };

  const filterOptions = (options: Option[], input: string) => options?.filter(({ label }: Option) => label.toLowerCase().includes(input.toLowerCase()));
  const comparator = (v1: Option, v2: Option) => (v1.value as number) - (v2.value as number);

  const filteredOptions = filterOptions(props.options, selectInput);
  const filteredSelectedOptions = filterOptions(props.value, selectInput);

  const controlStyles = {
    base: 'border  hover:cursor-pointer text-sm mb-2 dark:bg-theme-bg',
    focus: 'border-violet',
    nonFocus: 'border-gray hover:border-gray',
  };
  const placeholderStyles = '';
  const selectInputStyles = '';
  const valueContainerStyles = '';
  const singleValueStyles = '';
  const multiValueStyles = 'bg-violet-lighter dark:bg-teal';
  const multiValueLabelStyles = 'dark:text-white';
  const multiValueRemoveStyles = 'dark:bg-teal';

  const indicatorsContainerStyles = '';
  const clearIndicatorStyles = '';

  const indicatorSeparatorStyles = '';

  const dropdownIndicatorStyles = '';
  const menuStyles = 'dark:bg-theme-bg text-sm';
  const groupHeadingStyles = '';
  const optionStyles = {
    base: 'dark:hover:bg-teal px-3 py-2 text-sm dark:bg-theme-bg',
    focus: 'bg-gray active:bg-gray',
    selected: 'bg-violet-lighter dark:bg-teal',
  };
  const noOptionsMessageStyles = 'text-gray p-2 bg-gray border border-dashed border-gray rounded-sm';

  const Option = (props: any) => (
    <components.Option {...props}>
      {props.value === '*' && !isAllSelected.current && filteredSelectedOptions?.length > 0 ? (
        <input
          key={props.value}
          type="checkbox"
          ref={(input) => {
            if (input) input.indeterminate = true;
          }}
        />
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <input key={props.value} type="checkbox" checked={props.isSelected || isAllSelected.current} onChange={() => {}} />
      )}
      <label style={{ marginLeft: '5px' }}>{props.label}</label>
    </components.Option>
  );

  const Input = (props: any) => (
    <>
      {selectInput.length === 0 ? (
        <components.Input autoFocus={props.selectProps.menuIsOpen} {...props}>
          {props.children}
        </components.Input>
      ) : (
        <div style={{ border: '1px dotted gray' }}>
          <components.Input autoFocus={props.selectProps.menuIsOpen} {...props}>
            {props.children}
          </components.Input>
        </div>
      )}
    </>
  );

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
    else if (props.value != null) return props.onChange([...props.value?.filter(({ label }: Option) => !label.toLowerCase().includes(selectInput?.toLowerCase()))]);
  };

  //const customStyles = {
  //  multiValueLabel: (def: any) => ({
  //    ...def,
  //    backgroundColor: 'lightgray',
  //  }),
  //  multiValueRemove: (def: any) => ({
  //    ...def,
  //    backgroundColor: 'lightgray',
  //  }),
  //  valueContainer: (base: any) => ({
  //    ...base,
  //    maxHeight: '65px',
  //    overflow: 'auto',
  //  }),
  //  option: (styles: any, { isSelected, isFocused }: any) => {
  //    return {
  //      ...styles,
  //      backgroundColor: isSelected && !isFocused ? null : isFocused && !isSelected ? styles.backgroundColor : isFocused && isSelected ? '#e5e2ff' : null,
  //      color: isSelected ? '#000000' : null,
  //      fontSize: '14px',
  //    };
  //  },
  //  menu: (def: any) => ({ ...def, zIndex: 9999 }),
  //};

  if (props.isSelectAll && props.options.length !== 0) {
    isAllSelected.current = JSON.stringify(filteredSelectedOptions) === JSON.stringify(filteredOptions);

    if (filteredSelectedOptions?.length > 0) {
      if (filteredSelectedOptions?.length === filteredOptions?.length) selectAllLabel.current = `All (${filteredOptions.length}) selected`;
      else selectAllLabel.current = `${filteredSelectedOptions?.length} / ${filteredOptions.length} selected`;
    } else selectAllLabel.current = 'Select all';

    allOption.label = selectAllLabel.current;

    return (
      <ReactSelect
        {...props}
        inputValue={selectInput}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        options={[allOption, ...props.options]}
        onChange={handleChange}
        components={{
          Option: Option,
          Input: Input,
          ...props.components,
        }}
        filterOption={customFilterOption}
        menuPlacement={props.menuPlacement ?? 'auto'}
        //styles={customStyles}
        isMulti
        closeMenuOnSelect={false}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
        hideSelectedOptions={false}
        blurInputOnSelect={false}
        classNames={{
          control: ({ isFocused }) => clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) => clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
      />
    );
  }

  return (
    <ReactSelect
      {...props}
      inputValue={selectInput}
      onInputChange={onInputChange}
      filterOption={customFilterOption}
      components={{
        Input: Input,
        ...props.components,
      }}
      menuPlacement={props.menuPlacement ?? 'auto'}
      onKeyDown={onKeyDown}
      tabSelectsValue={false}
      hideSelectedOptions={false}
      backspaceRemovesValue={false}
      blurInputOnSelect={true}
      classNames={{
        control: ({ isFocused }) => clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) => clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
};

export default MultiSelect;
