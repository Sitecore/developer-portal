// Allow CSS modules for third-party libraries
declare module '*.module.css';
declare module '*.module.scss';

declare module 'react-twitter-embed' {
  const TwitterTweetEmbed: any;
  export default TwitterTweetEmbed;
}
