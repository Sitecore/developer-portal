import { cn } from '@/src/lib/util';
import Select from 'react-select';

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
      isSearchable={false}
      className={cn('react-select-container', props.className)}
      classNamePrefix="react-select"
    />
  );
};

export default MultiSelect;
