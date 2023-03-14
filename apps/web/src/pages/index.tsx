import { useState } from 'react';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { ListBox, ListBoxOption } from 'ui/components/dropdown/ListBox';
import MultiSelect, { Option } from 'ui/components/dropdown/MultiSelect';

import Layout from 'ui/layouts/Layout';

export default function Web() {
  const [optionSelected, setSelected] = useState<Option[] | null>();
  const [numberSelected, setNumberSelected] = useState<string>('All');
  const handleChange = (selected: Option[]) => {
    setSelected(selected);
    setNumberSelected(`${selected.length} products selected`);
  };

  const options: ListBoxOption[] = [
    { value: '0', label: 'All Products' },
    { value: '1', label: 'Sitecore Product 1' },
    { value: '2', label: 'Sitecore Product 2' },
    { value: '3', label: 'Sitecore Product 3' },
    { value: '4', label: 'Sitecore Product 4' },
    { value: '5', label: 'Sitecore Product 5' },
  ];

  return (
    <Layout title="Test" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Web</h1>

            <ListBox
              id="select"
              options={options}
              className="h-12 w-96 text-sm"
              onSelectChange={function (selectedValues: readonly ListBoxOption[]): void {
                console.log(selectedValues);
              }}
            />

            <MultiSelect key="example_id" options={options} className="w-96" onChange={handleChange} value={optionSelected} isSelectAll={true} menuPlacement={'bottom'} />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
