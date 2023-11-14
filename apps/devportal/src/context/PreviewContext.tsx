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
  preview: boolean;
  currentHostname: string;
};

const PreviewProvider = ({ children, preview, currentHostname }: PreviewProviderProps) => {
  const [isPreviewModeEnabled, setIsPreviewModeEnabled] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>();

  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const isEnabled = process.env.NEXT_PUBLIC_PREVIEW_HOSTNAME === currentHostname;

  useEffect(() => {
    setIsPreview(preview);
    setIsPreviewModeEnabled(isEnabled);
  }, [preview, isEnabled]);

  const router = useRouter();

  const refreshPage = () => {
    router.replace(router.asPath);
  };

  const enablePreviewMode = () => {
    setIsPreviewModeEnabled(true);
  };

  const togglePreview = async () => {
    const success = await triggerPreview(!isPreview);
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
        isPreview: preview,
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

