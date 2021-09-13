// Global
import ReactMarkdown from 'react-markdown';
import { classnames } from 'tailwindcss-classnames';
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from '@/lib/getMarkdownData';
// Interfaces
import { MarkdownAsset, MarkdownMeta } from '@/interfaces/markdownAsset';
import { StackExchangeQuestion } from '@/interfaces/integrations';
// Components
import Layout from '@/components/layout/Layout';
import ProductCategoryCard, {
  ProductCategoryCardProps,
} from '@/components/cards/ProductCategoryCard';
import stackExchangeApi from '@/components/integrations/stackexchange/StackExchange.api';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const communityMarkDownFolder = 'community';
  const helpMarkDownFolder = 'help';
  const pageInfo = await getPageLevelInfoForFile('home.md', 'home');
  const slack = await getMarkdownData('slack.md', communityMarkDownFolder);
  const stackExchange = await getMarkdownData('stackexchange.md', communityMarkDownFolder);
  const forums = await getMarkdownData('forums.md', communityMarkDownFolder);
  const getHelp = await getMarkdownData('gethelp.md', helpMarkDownFolder);
  const stackExchangeQuestions = await stackExchangeApi.get(pageInfo.stackexchange);

  return {
    props: {
      pageInfo,
      forums,
      slack,
      stackExchange,
      stackExchangeQuestions,
      getHelp,
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
  forums,
  slack,
  stackExchange,
  stackExchangeQuestions,
  getHelp,
}: {
  pageInfo: MarkdownMeta;
  forums: MarkdownAsset;
  slack: MarkdownAsset;
  stackExchange: MarkdownAsset;
  stackExchangeQuestions: StackExchangeQuestion[];
  getHelp: MarkdownAsset;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <YouTubeFeed pageInfo={pageInfo} />
        <div className={styles.youtubeCard}>
          <h2>Join these cool Sitecore Communities 🤖</h2>
          <div className={styles.threeColumn}>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{slack.markdown}</ReactMarkdown>
            </div>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{stackExchange.markdown}</ReactMarkdown>
            </div>
            <div className={styles.oneThirdCard}>
              <ReactMarkdown>{forums.markdown}</ReactMarkdown>
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
          <ReactMarkdown>{getHelp.markdown}</ReactMarkdown>
        </div>
        <StackExchangeFeed questions={stackExchangeQuestions} />
      </div>
    </Layout>
  );
}
