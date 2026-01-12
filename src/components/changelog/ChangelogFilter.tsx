import { MultiSelect, type Option } from "@src/components/ui/dropdown";
import { Skeleton } from "@src/components/ui/skeleton";
import type { Product } from "@src/lib/changelog/types";
import { useState } from "react";
import { Field, FieldLabel } from '../ui/field';

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
    return <Skeleton className="h-10 w-full">Loading...</Skeleton>;
  }

  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor={`react-select-${id}-input`}>{label}</FieldLabel>

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
        className="sm:min-w-[450px] text-md"
      />
    </Field>
  );
};

export default ChangelogFilter;
