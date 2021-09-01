import {  MarkdownMeta } from '../interfaces/markdownAsset';
import styles from '../styles/Home.module.css'

export default function TwitterFeed({pageInfo} : {pageInfo: MarkdownMeta}) {
    let style = pageInfo.twitter ?  styles.socialsCard : styles.hidden    
    return (
        <div className={style}>
            <h2>Latest {pageInfo.twitter} tweets 🕊</h2>
            <p>{pageInfo.twitter}</p>
        </div>
    )
}