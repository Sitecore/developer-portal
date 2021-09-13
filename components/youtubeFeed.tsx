import { MarkdownMeta } from '../interfaces/markdownAsset';
import styles from '../styles/Home.module.css';

export default function YouTubeFeed({ pageInfo }: { pageInfo: MarkdownMeta }) {
  let style = pageInfo.youtube ? styles.youtubeCard : styles.hidden;
  return (
    <div className={style}>
      <h2>I'm recent YouTube videos 🎥</h2>
      <p>{pageInfo.youtube?.join()}</p>
    </div>
  );
}
