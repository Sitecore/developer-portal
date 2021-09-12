// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
// Scripts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import ProductCategoryCard, {
  ProductCategoryCardProps,
} from '@/components/cards/ProductCategoryCard';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('home');
  const partials = await getPartials({
    slack: 'community/slack',
    stackExchange: 'community/stackExchange',
    forums: 'community/forums',
    getHelp: 'help/gethelp',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

const productSolutions: ProductCategoryCardProps[] = [
  {
    title: 'Content Management (CMS) 💾 &rarr;',
    description:
      'Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.',
    href: '/content-management/',
  },
  {
    title: 'Digital Asset Management (DAM) 📀 &rarr;',
    description: 'Scale management and delivery of media and static assets',
    href: '/digital-asset-management/dam',
  },
  {
    title: 'Customer Data Management 👨‍👨‍👧‍👧 &rarr;',
    description: 'Track events, activity, and customer profile information',
    href: '/customer-data-management/',
  },
  {
    title: 'Personalization and Testing 🕵️‍♀️ &rarr;',
    description: 'Deliver personalized content and test which content is working',
    href: '/personalization-testing/',
  },
  {
    title: 'Marketing Automation 🚗 &rarr;',
    description: 'Connect with customers using marketing automation',
    href: '/marketing-automation/',
  },
  {
    title: 'Commerce 💸 &rarr;',
    description: 'Build out order management, merchandising, marketplaces, and storefronts',
    href: '/commerce/',
  },
  {
    title: 'DevOps 🚢 &rarr;',
    description: 'Installation, deployment, and architecture',
    href: '/devops/',
  },
];

export default function Home({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartials;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <YouTubeFeed content={pageInfo.youtube} />
        <div className={styles.youtubeCard}>
          <h2>Join these cool Sitecore Communities 🤖</h2>
          <div className={styles.threeColumn}>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{partials.slack}</ReactMarkdown>
            </div>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{partials.stackExchange}</ReactMarkdown>
            </div>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{partials.forums}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* PRODUCT SOLUTIONS */}
        <ul className={classnames('grid', 'gap-6', 'md:grid-cols-2')}>
          {productSolutions.map((solution, i) => (
            <ProductCategoryCard {...solution} key={i} />
          ))}
        </ul>
        <div className={styles.youtubeCard}>
          <ReactMarkdown>{partials.getHelp}</ReactMarkdown>
        </div>
        <StackExchangeFeed content={pageInfo.stackexchange} />
      </div>
    </Layout>
  );
}
