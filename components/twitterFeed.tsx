import {  MarkdownMeta } from '../interfaces/markdownAsset';
import styles from '../styles/Home.module.css'

export default function TwitterFeed({pageInfo} : {pageInfo: MarkdownMeta}) {
    let style = pageInfo.twitter ?  styles.socialsCard : styles.hidden    
    let title = 'Latest tweets 🕊';
    if(pageInfo.twitter && pageInfo.twitter.length == 1){
        title = 'Latest ' + pageInfo.twitter + ' tweets 🕊';
    }

    return (
        <div className={style}>
            <h2>{title}</h2>
            <p>{pageInfo.twitter?.join()}</p>
        </div>
    )
}