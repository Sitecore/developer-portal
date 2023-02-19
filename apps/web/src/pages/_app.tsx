import '../styles/global.css';
//${AvenirNextR.variable} ${AvenirNextLTPro.variable}
export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`theme-light text-theme-text bg-theme-bg dark:theme-dark font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
