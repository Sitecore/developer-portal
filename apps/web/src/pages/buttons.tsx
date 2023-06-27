import Button from 'ui/components/buttons/Button';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  const url = 'https://developers.sitecore.com';
  const text = 'Hello world';

  return (
    <Layout title="Buttons" description="Example page with all available buttons">
      <VerticalGroup>
        <Container>
          <h2 className="heading-md">Buttons</h2>

          <table className="table-auto">
            <thead>
              <th>Name</th>
              <th>Example</th>
              <th>lg</th>
              <th>default</th>
              <th>xs</th>
              <th>sm</th>
            </thead>
            <tbody>
              <tr>
                <td>Linkbutton</td>
                <td></td>
                <td>
                  <Button text={text} href={url} variant="default" icon={true} size="lg"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="default" icon={true}></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="default" icon={true} size="xs"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="default" icon={true} size="sm"></Button>
                </td>
              </tr>
              <tr>
                <td>EditButton</td>
                <td></td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="edit" iconPosition="left" size="lg"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="edit" iconPosition="left"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="edit" iconPosition="left" size="xs"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="edit" iconPosition="left" size="sm"></Button>
                </td>
              </tr>
              <tr>
                <td>SmallLinkButton</td>
                <td></td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="close" iconPosition="left" size="lg"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="close" iconPosition="left"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="close" iconPosition="left" size="xs"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="outline" icon={true} iconName="close" iconPosition="left" size="sm"></Button>
                </td>
              </tr>
              <tr>
                <td>GitHub Button</td>
                <td></td>
                <td>
                  <Button text={text} href={url} variant="secondary" icon={true} iconName="github" iconPosition="left" size="lg"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="secondary" icon={true} iconName="github" iconPosition="left"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="secondary" icon={true} iconName="github" iconPosition="left" size="xs"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="secondary" icon={true} iconName="github" iconPosition="left" size="sm"></Button>
                </td>
              </tr>
              <tr>
                <td>TextLink</td>
                <td></td>
                <td>
                  <Button text={text} href={url} variant="text" icon={true} size="lg"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="text" icon={true}></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="text" icon={true} size="xs"></Button>
                </td>
                <td>
                  <Button text={text} href={url} variant="text" icon={true} size="sm"></Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
