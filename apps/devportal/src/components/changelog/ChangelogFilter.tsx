import { Container, Skeleton, SkeletonText, VisuallyHidden } from '@chakra-ui/react';
import { useState } from 'react';
import { Product } from 'sc-changelog/types';
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

  if (!options)
    return (
      <Skeleton>
        <SkeletonText>Loading...</SkeletonText>
      </Skeleton>
    );

  return (
    <Container marginBottom={4} marginX={0} width={'full'}>
      <VisuallyHidden>
        <label className="sr-only" htmlFor={`react-select-${id}-input`}>
          {label}
        </label>
      </VisuallyHidden>
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
    </Container>
  );
};

export default ChangelogFilter;
