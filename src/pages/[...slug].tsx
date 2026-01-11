import type { ManifestConfig } from '@src/lib/interfaces/manifest';
import type { ChildPageInfo, PageInfo } from '@src/lib/interfaces/page-info';
import { getChildNavgationInfo, getChildPageInfo, getPageInfo } from '@src/lib/page-info';
import { getStaticPathsRecursively } from '@src/lib/staticPaths';
import dynamic from 'next/dynamic';

// Dynamically import layout components to reduce initial bundle size
const ArticlePage = dynamic(() => import('@src/layouts/ArticlePage'), {
  loading: () => <div className="min-h-screen" />,
});

const ChildOverviewPage = dynamic(() => import('@src/layouts/ChildOverviewPage'), {
  loading: () => <div className="min-h-screen" />,
});

const DefaultContentPage = dynamic(() => import('@src/layouts/DefaultContentPage'), {
  loading: () => <div className="min-h-screen" />,
});

const SocialPage = dynamic(() => import('@src/layouts/SocialPage'), {
  loading: () => <div className="min-h-screen" />,
});

const AcceleratePage = dynamic(() => import('@src/layouts/AcceleratePage'), {
  loading: () => <div className="min-h-screen" />,
});

const NewsLetterPage = dynamic(() => import('@src/layouts/NewsLetterPage'), {
  loading: () => <div className="min-h-screen" />,
});

const Tutorial = dynamic(() => import('@src/layouts/Tutorial'), {
  loading: () => <div className="min-h-screen" />,
});

export async function getStaticPaths() {
  const paths = await getStaticPathsRecursively();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params.slug);

  if (pageInfo == null) {
    return { notFound: true };
  }

  const childPageInfo = pageInfo.pageType === 'childoverview' || pageInfo.pageType === 'newsletter' ? await getChildPageInfo(context.params.slug.join('/')) : null;
  let sidebarNavConfig = null;

  if (pageInfo.hasSubPageNav) {
    sidebarNavConfig = await getChildNavgationInfo(context.params.slug.join('/'));
  }

  return {
    props: {
      pageInfo,
      childPageInfo,
      sidebarNavConfig,
    },
  };
}

export default function Slug({ pageInfo, childPageInfo, sidebarNavConfig }: { pageInfo: PageInfo; childPageInfo: Array<ChildPageInfo>; sidebarNavConfig: ManifestConfig }) {
  // Check for other page types
  if (pageInfo.pageType) {
    switch (pageInfo?.pageType.toLowerCase()) {
      case 'childoverview':
        return <ChildOverviewPage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
      case 'social':
        return <SocialPage pageInfo={pageInfo} />;
      case 'newsletter':
        return <NewsLetterPage pageInfo={pageInfo} sidebarConfig={sidebarNavConfig} childPageInfo={childPageInfo} />;
      case 'tutorial':
        return <Tutorial pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
    }
  }
  if (pageInfo?.area?.includes('accelerate')) {
    return <AcceleratePage pageInfo={pageInfo} hasGrid={false} sidebarConfig={sidebarNavConfig} />;
  }

  if (pageInfo.hasSubPageNav) {
    return <ArticlePage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
  }

  return <DefaultContentPage pageInfo={pageInfo} hasGrid={false} />;
}
