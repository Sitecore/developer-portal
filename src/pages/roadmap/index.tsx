import { Item, ItemActions, ItemContent } from '@/src/components/ui/item';
import { slugify } from '@/src/lib/util/stringUtil';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { HideForUsers } from '@src/components/authentication/HideForUsers';
import { RestrictedContent } from '@src/components/authentication/RestrictedContent';
import { TrackPageView } from '@src/components/integrations/engage/TrackPageView';
import { Alert, AlertDescription, AlertTitle } from '@src/components/ui/alert';
import { Button } from '@src/components/ui/button';
import type { Option } from '@src/components/ui/dropdown';
import { CenteredContent, Hero, VerticalGroup } from '@src/components/ui/sections';
import Layout from '@src/layouts/Layout';
import type { RoadmapInformation } from '@src/lib/interfaces/jira';
import type { PageInfo } from '@src/lib/interfaces/page-info';
import { getRoadmap } from '@src/lib/jira';
import { getPageInfo } from '@src/lib/page-info';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');
  const roadmap = await getRoadmap();

  return { props: { pageInfo, products: roadmap.products } };
}

function fixTitle(product: string) {
  return product.replace('Ai', 'AI');
}

const Roadmap: NextPage<RoadmapPageProps> = ({ pageInfo, products }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup className="min-h-[calc(100vh-430px)]">
          <CenteredContent>

              <Alert variant="default" className="my-4">
                <AlertTitle>Roadmap Update</AlertTitle>
                <AlertDescription>
                      <p>We are refreshing how we present our product roadmap on this site to ensure consistency across all public materials. We will continue to share forward-looking information through an updated roadmap on this site at a later stage.</p>
                </AlertDescription>
              </Alert>

          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
