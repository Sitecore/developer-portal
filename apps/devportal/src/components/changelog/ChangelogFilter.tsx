import { useState } from 'react';
import Product from 'sc-changelog/types/product';
import MultiSelect, { Option } from 'ui/components/dropdown/MultiSelect';

type ChangelogFilterProps = {
  className?: string;
  initialChangeType?: Product;
  options: Option[];
  id: string;
  label: string;
  placeholder: string;
  onSelectChange: (selectedValues: Option[]) => void;
};

const ChangelogFilter = ({ options, id, label, placeholder, onSelectChange }: ChangelogFilterProps): JSX.Element => {
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);

  if (!options) return <div className={`bg-theme-text-alt w-full animate-pulse text-transparent hover:text-transparent`}>Loading, please wait!</div>;

  return (
    <>
      <label className="sr-only" htmlFor={`react-select-${id}-input`}>
        {label}
      </label>
      <MultiSelect
        id={id}
        instanceId={id}
        key={id}
        options={options}
        classNames={{
          control: () => 'mb-2 text-sm dark:bg-theme-bg',
        }}
        onChange={(e: Option[]) => {
          setSelectedChange(e);
          onSelectChange(e);
        }}
        value={selectedChange}
        isSelectAll={true}
        menuPlacement={'bottom'}
        placeholder={placeholder}
      />
    </>
  );
};

export default ChangelogFilter;
