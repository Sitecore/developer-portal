import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { ListBox, ListBoxOption } from 'ui/components/dropdown/ListBox';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  const options: ListBoxOption[] = [
    { value: '0', label: 'All Products' },
    { value: '1', label: 'Durward Reynolds' },
    { value: '2', label: 'Kenton Towne' },
    { value: '3', label: 'Therese Wunsch' },
    { value: '4', label: 'Benedict Kessler' },
    { value: '5', label: 'Katelyn Rohan' },
  ];

  return (
    <Layout title="Test" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Web</h1>

            <ListBox options={options} />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
