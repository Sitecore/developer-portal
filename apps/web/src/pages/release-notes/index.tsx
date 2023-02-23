import Products from 'sc-changelog/constants/products';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { LinkValue } from 'ui/common/types/link-value';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { Dropdown } from 'ui/components/dropdown/Dropdown';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  const options: LinkValue[] = Products.map((x) => {
    return { href: getSlug(x.name), text: x.name };
  });

  return (
    <Layout title="Release Notes - Home" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Release Notes Home</h1>
            <Dropdown options={options} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            adasd
            <br />
            <br />
            <br />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
