/* eslint-disable turbo/no-undeclared-env-vars */
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type PreviewContextType = {
  isPreview: boolean;
  isPreviewModeEnabled: boolean;
  togglePreview: () => void;
  refreshPage: () => void;
  enablePreviewMode: () => void;
  enablePreview: () => void;
};

export const PreviewContext = createContext<PreviewContextType | null>(null);

type PreviewProviderProps = {
  children: ReactNode | ReactNode[];
  hostname: string;
};

const PreviewProvider = ({ children, hostname }: PreviewProviderProps) => {
  const [isPreviewModeEnabled, setIsPreviewModeEnabled] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>();
  const [isLoaded, setIsLoaded] = useState(false);

  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const isPreviewDomain = process.env.NEXT_PUBLIC_PREVIEW_HOSTNAME === hostname;
  const cookieName = '_scdp_preview_mode';
  const router = useRouter();

  useEffect(() => {
    const hasVisited = getCookie(cookieName);
    if (!hasVisited && isPreviewDomain) {
      setCookie(cookieName, 'true', 1);
      enablePreview();
      setIsLoaded(true);
    }
    if (isPreviewDomain) {
      enablePreviewMode();
    }
  }, [isPreviewDomain, isLoaded]);

  const refreshPage = () => {
    router.reload();
  };

  const enablePreviewMode = () => {
    setIsPreviewModeEnabled(true);
  };

  const togglePreview = async () => {
    const success = await triggerPreview(!router.isPreview);
    if (success) {
      setIsPreview(!isPreview);
      refreshPage();
    }
  };

  const enablePreview = async () => {
    const success = await triggerPreview(true);
    if (success) {
      setIsPreview(!isPreview);
      refreshPage();
    }
  };

  return (
    <PreviewContext.Provider
      value={{
        isPreview: router.isPreview,
        isPreviewModeEnabled: isPreviewModeEnabled,
        togglePreview,
        refreshPage,
        enablePreviewMode,
        enablePreview,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    const cookieName = cookiePair[0].trim();
    if (cookieName === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};

const triggerPreview = async (enable: boolean) => {
  //const secret = 'test-staging';
  const route = enable ? `/api/context/preview` : `/api/context/preview?clear`;
  const response = await fetch(route, {
    method: 'POST',
  });
  if (response.ok) {
    return true;
  }
  return false;
};

const usePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};

export { PreviewProvider, usePreview };

