import Container from '@/components/helper/Container';
import Image from 'next/image';
import { classnames } from 'tailwindcss-classnames';

const Footer = (): JSX.Element => {
  return (
    <footer
      className={classnames(
        'bg-charcoal',
        'border-t',
        'border-theme-border',
        'flex',
        'justify-center',
        'py-12',
        'text-white',
        'theme-dark'
      )}
    >
      <Container
        size="standard"
        className={classnames('flex', 'container', 'flex-col', 'px-4', 'sm:px-0')}
      >
        <div className={classnames('inline-flex', 'mb-4')}>
          <a
            className={classnames('mr-6')}
            href="https://twitter.com/WeAreSitecore"
            target=""
            aria-label="twitter"
          >
            <svg width="19" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="rgba(255, 255, 255, 0.99)"
                stroke="rgba(255, 255, 255, 0.99)"
                d="M459.37 151.72c.33 4.54.33 9.1.33 13.64 0 138.72-105.59 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84a105.12 105.12 0 01-98.1-72.77c6.49.97 12.99 1.62 19.81 1.62 9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0120.8 195.57v-1.3a105.68 105.68 0 0047.43 13.32 104.86 104.86 0 01-46.78-87.39c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 00216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03 0-57.83 46.78-104.94 104.94-104.94 30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0066.6-25.34 104.65 104.65 0 01-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 01-52.63 54.26z"
              />
            </svg>
          </a>
          <a
            className={classnames('mr-6')}
            href="https://www.youtube.com/c/DiscoverSitecore"
            target=""
            aria-label="Youtube"
          >
            <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="rgba(255, 255, 255, 0.99)"
                stroke="rgba(255, 255, 255, 0.99)"
                d="M549.65 124.08a68.62 68.62 0 00-48.28-48.6C458.78 64 288 64 288 64S117.22 64 74.63 75.49a68.62 68.62 0 00-48.28 48.6c-11.42 42.86-11.42 132.3-11.42 132.3s0 89.44 11.42 132.3c6.28 23.65 24.78 41.5 48.28 47.82C117.22 448 288 448 288 448s170.78 0 213.37-11.49c23.5-6.32 42-24.17 48.28-47.82 11.42-42.86 11.42-132.3 11.42-132.3s0-89.44-11.42-132.3zM232.15 337.6V175.2l142.73 81.2-142.73 81.2z"
              />
            </svg>
          </a>
          <a
            className={classnames('mr-6')}
            href="https://www.linkedin.com/company/sitecore/"
            target=""
            aria-label="LinkedIn"
          >
            <svg width="19" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="rgba(255, 255, 255, 0.99)"
                stroke="rgba(255, 255, 255, 0.99)"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </a>
          <a
            className={classnames('mr-6')}
            href="https://www.facebook.com/Sitecore"
            target=""
            aria-label="facebook"
          >
            <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.8 24v-9.32H9.7v-3.6h3.1V8.42c0-1.54.43-2.71 1.29-3.54a4.67 4.67 0 013.37-1.23c1.11 0 2.04.04 2.79.11v3.27h-1.93c-.68 0-1.16.16-1.45.48-.2.25-.32.68-.32 1.29v2.3h3.6l-.49 3.59h-3.1V24h6.1c.4 0 .71-.13.96-.4.26-.27.38-.58.38-.94V1.34A1.33 1.33 0 0022.66 0H1.34C.94 0 .63.12.37.38a1.3 1.3 0 00-.37.96v21.32A1.33 1.33 0 001.34 24H12.8z"
                fill="rgba(255, 255, 255, 0.99)"
                fillRule="nonzero"
              />
            </svg>
          </a>
          <a
            className={classnames('mr-6')}
            href="https://www.instagram.com/sitecore/"
            target=""
            aria-label="Instagram"
          >
            <svg width="19" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="rgba(255, 255, 255, 0.99)"
                stroke="rgba(255, 255, 255, 0.99)"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1126.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.63 75.63 0 01-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.63 75.63 0 0149.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.63 75.63 0 0192 81.2c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0142.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
        <div className={classnames('flex-col', 'sm:flex-row', 'flex', 'text-2xs', 'font-thin')}>
          <p className={classnames('tracking-widest', 'mb-4', 'sm:mb-0')}>
            © Copyright <span>{new Date().getFullYear()}</span>, Sitecore. All Rights Reserved
          </p>
          <ul>
            <li
              className={classnames(
                'inline-block',
                'sm:border-l',
                'pl-0',
                'pr-2',
                'sm:px-2',
                'sm:ml-2'
              )}
            >
              <a
                className={classnames('font-semibold')}
                href="https://www.sitecore.com/trust"
                target="_blank"
              >
                Legal
                <span className={classnames('sr-only')}>Opens in a new tab</span>
              </a>
            </li>
            <li className={classnames('inline-block', 'border-l', 'px-2')}>
              <a
                className={classnames('font-semibold')}
                href="https://www.sitecore.com/trust/privacy-policy"
                target="_blank"
              >
                Privacy
                <span className={classnames('sr-only')}>Opens in a new tab</span>
              </a>
            </li>
            <li className={classnames('inline-block', 'border-l', 'px-2')}>
            <a
                className={classnames('font-semibold')}
                href="/help"
              >
                Get Help
                <span className={classnames('sr-only')}>Opens in a new tab</span>
              </a>
            </li>
            <li className={classnames('inline-block', 'border-l', 'px-2')}>
            <a
                className={classnames('font-semibold')}
                href="/contribute"
              >
                Contribute
                <span className={classnames('sr-only')}>Opens in a new tab</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
