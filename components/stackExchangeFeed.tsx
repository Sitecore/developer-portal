import {  MarkdownMeta } from '../interfaces/markdownAsset';
import styles from '../styles/Home.module.css'

export default function StackExchangeFeed({pageInfo} : {pageInfo: MarkdownMeta}) {
    let style = pageInfo.stackexchange ?  styles.socialsCard : styles.hidden    
    return (
        <div className={style}>
            <h2>Latest StackExchange questions</h2>
            <p>{pageInfo.stackexchange?.join()}</p>
        </div>
    )
}