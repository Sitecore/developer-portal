import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getMarkdownData } from '../../lib/getMarkdownData';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
	const dam = await getMarkdownData('dam.md');

	return {
		props: {
			dam,
		},
	};
}

export default function ContentHub({ dam }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Content Management - Content Hub</title>
				<meta name="description" content="Content Hub content management and content operations" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Content Management - Content Hub 🕵️‍♀️</h1>
				<a href="/" className={styles.link}>
					<h2>Take me Home</h2>
				</a>

				<div className={styles.grid}>
					<div className={styles.searchCard}>
						<h2>I'm a unified search 🔍</h2>
					</div>

					<div className={styles.socialsCard}>
						<h2>News & Announcements</h2>
						<a href="" className={styles.link}>
							<li>Cool new Content Hub things</li>
						</a>
					</div>

					<div className={styles.socialsCard}>
						<ReactMarkdown>{dam.markdown}</ReactMarkdown>
					</div>
				</div>
			</main>
		</div>
	);
}
