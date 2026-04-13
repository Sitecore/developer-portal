import { useRouter } from "next/router";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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
  children: ReactNode | Array<ReactNode>;
  hostname: string;
};

const PreviewProvider = ({ children, hostname }: PreviewProviderProps) => {
  const [isPreviewModeEnabled, setIsPreviewModeEnabled] =
    useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>();
  const [_isLoaded, setIsLoaded] = useState(false);
  const hasTriggeredPreviewRef = useRef(false); // Prevent infinite reloads
  const isDevMode = process.env.NODE_ENV === "development";

  const isPreviewDomain = process.env.NEXT_PUBLIC_PREVIEW_HOSTNAME === hostname;
  const cookieName = "_scdp_preview_mode";
  const router = useRouter();

  const refreshPage = useCallback(() => {
    router.reload();
  }, [router]);

  const enablePreviewMode = useCallback(() => {
    setIsPreviewModeEnabled(true);
  }, []);

  const enablePreview = useCallback(async () => {
    const success = await triggerPreview(true);

    if (success) {
      setIsPreview(!isPreview);
      refreshPage();
    }
  }, [isPreview, refreshPage]);

  const togglePreview = useCallback(async () => {
    const success = await triggerPreview(!router.isPreview);

    if (success) {
      setIsPreview(!isPreview);
      refreshPage();
    }
  }, [isPreview, refreshPage, router]);

  useEffect(() => {
    // Only run in browser (not during SSR)
    if (typeof window === "undefined") {
      return;
    }

    // Completely skip auto-enable logic in dev mode to prevent compilation hangs
    // Preview functionality can still be manually triggered if needed
    if (isDevMode) {
      // Just set preview mode enabled if on preview domain, but don't auto-enable
      if (isPreviewDomain) {
        enablePreviewMode();
      }
      return;
    }

    // Prevent infinite reloads - only trigger once
    if (hasTriggeredPreviewRef.current) {
      return;
    }

    // Only proceed if hostname is set (not empty string)
    if (!hostname) {
      return;
    }

    const hasVisited = getCookie(cookieName);

    // Only enable preview if we haven't visited and we're on the preview domain
    // Also check if we're already in preview mode to avoid unnecessary reloads
    if (!hasVisited && isPreviewDomain && !router.isPreview) {
      hasTriggeredPreviewRef.current = true; // Mark as triggered before async operation
      setCookie(cookieName, "true", 1);
      enablePreview();
      setIsLoaded(true);
    } else if (isPreviewDomain) {
      // If we've already visited or are already in preview, just enable preview mode
      enablePreviewMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostname, isPreviewDomain, isDevMode]); // Include isDevMode to prevent re-runs

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
  if (typeof document === "undefined") {
    return;
  }
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  if (typeof document === "undefined") {
    return null;
  }
  const cookieArray = document.cookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split("=");
    const cookieName = cookiePair[0].trim();

    if (cookieName === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
};

const triggerPreview = async (enable: boolean) => {
  // const secret = 'test-staging';
  const route = enable ? `/api/context/preview` : `/api/context/preview?clear`;
  const response = await fetch(route, {
    method: "POST",
  });

  if (response.ok) {
    return true;
  }

  return false;
};

const usePreview = () => {
  const context = useContext(PreviewContext);

  if (!context) {
    throw new Error("usePreview must be used within a PreviewProvider");
  }

  return context;
};

export { PreviewProvider, usePreview };
