import { useEffect, useState } from 'react';

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = (p: ThemeButtonProps) => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const label = `${darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}`;
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('SDPDarkMode', 'true');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('SDPDarkMode', 'false');
    }
  }, [darkMode]);
  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={onClick} aria-label={label} title={label} className={p.className}>
      <span className="sr-only" suppressHydrationWarning>
        {label}
      </span>
      {darkMode && sun}
      {!darkMode && moon}
    </button>
  );
};

export const sun = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

export const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);
