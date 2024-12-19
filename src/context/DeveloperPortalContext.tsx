import { createContext, ReactNode, useContext, useState } from 'react';
import { ChildPageInfo, PageInfo, SidebarNavigationConfig } from '../lib/interfaces/page-info';

type Context = {
  pageInfo: PageInfo;
  childPages: Array<ChildPageInfo> | [];
  navigation: SidebarNavigationConfig;
};

// Define the context type
type DeveloperPortalContextType = {
  context: Context | undefined;
  setContext: (context: Context) => void;
};

// Create the context with a default value of null
export const DeveloperPortalContext = createContext<DeveloperPortalContextType | undefined>(undefined);

// Create a provider component
export const DeveloperPortalProvider = ({ children }: { children: ReactNode }) => {
  const [context, setContext] = useState<Context>(); // Initial state is null

  return <DeveloperPortalContext.Provider value={{ context, setContext }}>{children}</DeveloperPortalContext.Provider>;
};

export const usePageContext = (): DeveloperPortalContextType => {
  const context = useContext(DeveloperPortalContext);
  if (!context) {
    throw new Error('useDeveloperPortalContext must be used within a DeveloperPortalProvider');
  }
  return context;
};
