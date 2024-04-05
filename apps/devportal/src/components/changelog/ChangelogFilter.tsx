/* eslint-disable no-unused-vars */
import { Container, Skeleton, SkeletonText, VisuallyHidden } from '@chakra-ui/react';
import { Product } from '@scdp/changelog/types';
import { MultiSelect, Option } from '@scdp/ui/components';
import { useState } from 'react';

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
