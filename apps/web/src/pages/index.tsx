import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { ListBox, ListBoxOption } from 'ui/components/dropdown/ListBox';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  const options: ListBoxOption[] = [
    { value: '0', label: 'All Products' },
    { value: '1', label: 'Product 1' },
    { value: '2', label: 'Product 2' },
    { value: '3', label: 'Product 3' },
    { value: '4', label: 'Product 4' },
    { value: '5', label: 'Product 5' },
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
              onSelectChange={function (selectedValues: readonly ListBoxOption[]): void {
                console.log(selectedValues);
              }}
            />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
