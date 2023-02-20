import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { Product } from 'sc-changelog/types';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  return (
    <Layout title="Test" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Web</h1>

            <h1 className="testmva">Release Notes Home</h1>
            {getReleaseNotesByProduct(Product.CDP)}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis augue at orci
              finibus, non dictum ipsum luctus. Ut placerat vulputate tincidunt. Ut ultrices nulla
              ut vehicula pellentesque. Cras sodales, odio a rutrum accumsan, quam odio lobortis
              dui, nec placerat ante turpis a augue. Nam lorem felis, efficitur nec viverra nec,
              tristique a est. Donec viverra elit sed mauris convallis, quis aliquam risus ultrices.
              Nam ultricies sapien quam, eu semper sapien vestibulum a. Quisque vitae elementum
              arcu. Aenean quis elementum elit. Maecenas tempor massa urna, volutpat consequat augue
              eleifend eu. Proin eu facilisis turpis. Vestibulum vulputate lorem vitae est semper,
              non ornare magna fermentum. Cras semper est ac metus lacinia rutrum.
            </p>
            <p>
              Pellentesque finibus velit eget ex elementum, nec mollis arcu efficitur. Fusce ac
              semper mauris, sed laoreet justo. Proin in lorem bibendum ipsum gravida bibendum sed
              non felis. Nullam eu elementum leo, in imperdiet metus. Vestibulum eu varius tellus,
              non pretium elit. Aenean et ultrices sem, eget semper elit. Integer quis mattis ante,
              vel porta metus. Morbi et ipsum maximus, suscipit sem eu, feugiat nunc. Aenean
              placerat, odio sit amet posuere vehicula, magna sem fermentum nulla, eu maximus dolor
              dui ultrices purus. Donec fermentum tincidunt diam, quis dignissim purus iaculis
              rhoncus. Morbi tincidunt lacus sed arcu imperdiet mattis. Vivamus sit amet enim
              pretium, porta mauris quis, luctus ipsum. Phasellus gravida nunc quam, vitae molestie
              ex porttitor eget. In molestie nibh vel gravida consectetur.
            </p>
            <p>
              In sed egestas odio. Etiam ac dignissim urna. Mauris viverra mattis orci pretium
              pharetra. Praesent tristique dolor viverra quam blandit, et tempor libero faucibus.
              Aenean varius consectetur porttitor. Vestibulum a mauris vestibulum, suscipit mi at,
              fermentum dolor. Mauris ut aliquam libero. Fusce quam metus, fermentum quis augue et,
              pulvinar dapibus leo. Donec ac feugiat metus. Maecenas vel neque in ligula imperdiet
              convallis. Sed et dapibus massa, nec luctus arcu. Fusce interdum erat nec sem lacinia
              pharetra. Aliquam porta auctor mauris elementum eleifend. Praesent malesuada nec dui
              quis feugiat. Ut luctus leo sit amet risus facilisis, nec finibus felis sagittis. Duis
              quis purus finibus, scelerisque sem vitae, lobortis dui.
            </p>
            <p>
              Maecenas fringilla mi felis, id suscipit lacus egestas et. Donec rhoncus eros eget
              augue lobortis, ac venenatis nunc auctor. In vulputate in quam at fringilla. Ut sed
              vulputate augue. Nullam facilisis volutpat orci, ut semper nisl hendrerit ac. Etiam
              metus dui, accumsan a lectus at, ullamcorper dignissim sem. Proin vitae arcu ligula.
              Maecenas euismod rutrum ligula quis pulvinar.
            </p>
            <p>
              Donec et erat urna. Nullam ac arcu tincidunt, ullamcorper nibh ut, porttitor leo. Duis
              ut iaculis sapien, vel sodales velit. Fusce faucibus nisi vitae nulla mattis aliquam.
              Fusce convallis vehicula velit, in euismod dui tempor eu. Suspendisse pharetra sit
              amet dui a vulputate. Nullam risus nibh, pulvinar at consectetur vel, tincidunt
              gravida odio. Maecenas a felis nec felis convallis rhoncus. Morbi id leo sit amet
              magna consectetur finibus sed id odio. Phasellus accumsan aliquet massa sed venenatis.
            </p>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
