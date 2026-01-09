import { MultiSelect, Option } from '@/src/components/ui/dropdown';
import { Skeleton } from '@components/ui/skeleton';
import { Product } from '@lib/changelog/types';
import { useState } from 'react';

type ChangelogFilterProps = {
  className?: string;
  initialChangeType?: Product;
  options: Array<Option>;
  id: string;
  label: string;
  placeholder: string;
  onSelectChange: (selectedValues: Array<Option>) => void;
};

const ChangelogFilter = ({ options, id, label, placeholder, onSelectChange }: ChangelogFilterProps) => {
  const [selectedChange, setSelectedChange] = useState<Array<Option>>([]);

  if (!options) {
    return (
      <Skeleton className="h-10 w-full">
        Loading...
      </Skeleton>
    );
  }

  return (
    <div className="mb-4 mx-0 w-full">
      <label className="sr-only" htmlFor={`react-select-${id}-input`}>
        {label}
      </label>
      <MultiSelect
        id={id}
        instanceId={id}
        key={id}
        options={options}
        onChange={(e: Array<Option>) => {
          setSelectedChange(e);
          onSelectChange(e);
        }}
        value={selectedChange}
        isSelectAll={true}
        menuPlacement={'bottom'}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ChangelogFilter;
