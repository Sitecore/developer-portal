import styles from '../styles/Home.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <a href="/" className={styles.navheader}>Home 🏡</a>
            </div>

            <div className={styles.container}>
                <span className={styles.navheader}>Navigate by type of content</span>
                <ul>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/discover">Discover</a></li>
                    <li><a href="">Learn</a></li>
                    <li><a href="">Playground</a></li>
                    <li><a href="/help">Get Help</a></li>
                    <li><a href="/community">Community</a></li>
                </ul>
            </div>
            <div className={styles.container}>
                <span className={styles.navheader}>Navigate by Solution</span>
                <ul>
                    <li>Content Management and Delivery
                        <ul>
                            <li><a href="/content-management/content-hub">Sitecore Content Hub</a></li>
                            <li><a href="">Experience Edge for Content Hub</a></li>
                            <li><a href="/content-management/experience-manager">Sitecore Experience Manager</a></li>
                            <li><a href="">Experience Edge for XM</a></li>
                            <li><a href="/content-management/sxa">Sitecore Experience Accelerator (SXA)</a></li>
                        </ul>
                    </li>
                    <li><a href="/digital-asset-management/dam">Digital Asset Management</a></li>
                    <li>Customer Data Management
                        <ul>
                            <li><a href="/customer-data-management/cdp">Sitecore CDP</a></li>
                            <li><a href="/customer-data-management/experience-platform">Sitecore Experience Platform</a></li>
                        </ul>
                    </li>
                    <li>Personalization and Testing
                        <ul>
                            <li><a href="/personalization-testing/cdp">Sitecore CDP</a></li>
                            <li><a href="/personalization-testing/experience-platform">Sitecore Experience Platform</a></li>
                        </ul>
                    </li>
                    <li>Marketing Automation
                        <ul>
                            <li><a href="/marketing-automation/moosend">Moosend</a></li>
                            <li><a href="/marketing-automation/experience-platform">Sitecore Experience Platform</a></li>
                        </ul>
                    </li>
                    <li>Commerce
                        <ul>
                            <li><a href="/commerce/orderCloud">OrderCloud</a></li>
                            <li><a href="/commerce/experience-commerce">Sitecore Experience Commerce</a></li>
                        </ul>
                    </li>
                    <li><a href="/devops">DevOps</a></li>
                </ul>
            </div>
            <div className={styles.container}>
                <span className={styles.navheader}>Navigate by Product</span>
                <ul>
                    <li>Sitecore Content Hub
                        <ul>
                            <li><a href="/content-management/content-hub">Content Management</a></li>
                            <li><a href="/digital-asset-management/dam">Digital Asset Management</a></li>
                            <li><a href="">Experience Edge for Content Hub</a></li>
                        </ul>
                    </li>
                    <li>Sitecore CDP
                        <ul>
                            <li><a href="/customer-data-management/cdp">Customer Data Management</a></li>
                            <li><a href="/personalization-testing/cdp">Personalization and Testing</a></li>
                        </ul>
                    </li>
                    <li>Sitecore Experience Manager
                        <ul>
                            <li><a href="/content-management/experience-manager">Content Management</a></li>
                            <li><a href="">Headless</a></li>
                            <li><a href="">Developer Collection</a></li>
                            <li><a href="">Experience Edge for XM</a></li>
                            <li><a href="/content-management/sxa">Sitecore Experience Accelerator (SXA)</a></li>
                        </ul>
                    </li>
                    <li>Sitecore Experience Platform
                        <ul>
                            <li><a href="/marketing-automation/experience-platform">Marketing Automation</a></li>
                            <li><a href="/customer-data-management/experience-platform">Customer Data Management</a></li>
                            <li><a href="/personalization-testing/experience-platform">Personalization and Testing</a></li>
                        </ul>
                    </li>
                    <li><a href="/marketing-automation/moosend">Moosend</a></li>
                    <li><a href="/commerce/orderCloud">Sitecore OrderCloud</a></li>
                    <li><a href="/commerce/experience-commerce">Sitecore Experience Commerce</a></li>
                </ul>
            </div>
        </nav>

    )
}