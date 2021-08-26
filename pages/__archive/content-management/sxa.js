import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import { getMarkdownData } from '../../../lib/getMarkdownData';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
	const sxa = await getMarkdownData('sxa.md', "product");

	return {
		props: {
			sxa,
		},
	};
}

export default function ContentHub({ sxa }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Content Management - SXA</title>
				<meta name="description" content="SXA content management and content operations" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Content Management - SXA 🕵️‍♀️</h1>

				<div className={styles.grid}>
					<div className={styles.socialsCard}>
						<h2>News & Announcements</h2>
						<a href="" className={styles.link}>
							<li>Cool new SXA things</li>
						</a>
					</div>

					<div className={styles.socialsCard}>
						<ReactMarkdown>{sxa.markdown}</ReactMarkdown>
					</div>
				</div>
			</main>
		</div>
	);
}
