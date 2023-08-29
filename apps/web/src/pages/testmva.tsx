import DefaultContentPage from '../layouts/DefaultContentPage';
import { PageInfo } from '../lib/interfaces/page-info';
import { getPageInfo } from '../lib/page-info';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('contribute', context.preview ? context.preview : null);

  return {
    props: {
      pageInfo,
    },
  };
}

export default function Contribute({ pageInfo }: { pageInfo: PageInfo }) {
  return <DefaultContentPage pageInfo={pageInfo} hasGrid={false} />;
}
