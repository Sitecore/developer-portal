import { createGlobalState } from 'react-hooks-global-state';

type GlobalStateTypes = {
  navScrolled: boolean;
};

export const { useGlobalState, setGlobalState } = createGlobalState({
  navScrolled: false,
} as GlobalStateTypes);
