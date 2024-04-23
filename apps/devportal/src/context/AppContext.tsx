import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { scdpTheme } from '@scdp/ui/theme';
import sitecoreTheme, { toastOptions } from '@sitecore/blok-theme';
import React, { createContext, useEffect, useState } from 'react';
import { isChangelogEnabled } from '../lib/changelog/changelog';

interface AppContextProps {
  children: React.ReactNode;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => React.useContext(AppContext);

export interface AppContextType {
  changelog: boolean;
  setChangelog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [changelog, setChangelog] = useState(false);

  useEffect(() => {
    setChangelog(isChangelogEnabled);
  }, [changelog]);

  return (
    <AppContext.Provider value={{ changelog, setChangelog }}>
      <ChakraProvider theme={extendTheme(sitecoreTheme, scdpTheme)} toastOptions={toastOptions}>
        {children}
      </ChakraProvider>
    </AppContext.Provider>
  );
};
