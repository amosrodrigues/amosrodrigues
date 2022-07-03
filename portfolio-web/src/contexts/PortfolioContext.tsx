import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import usePersistedState from '../hooks/usePersistedState'

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type AuthContextProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  theme: DefaultTheme;
  toggledTheme: () => void;
  menuActive: boolean;
  toggleMenu: () => void;
  isFetching: boolean;
  setIsFetching: (isFetching: boolean) => void | undefined;
  gitHubInfo: any[];
  setGitHubInfo: (gitHubInfo: any[]) => void;
}

export const PortfolioContext = createContext({} as ThemeContextType);

export function PortfolioProvider(props: AuthContextProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [menuActive, setMenuActive] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [gitHubInfo, setGitHubInfo] = useState<any[]>([]);

  const toggleMenu = () => {
    setMenuActive(!menuActive) 
  }

  const toggledTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const contextValues = {
    theme,
    toggledTheme,
    menuActive,
    toggleMenu,
    isFetching,
    setIsFetching,
    gitHubInfo,
    setGitHubInfo,
  }

  return (
    <PortfolioContext.Provider value={ contextValues }>
      {props.children}
    </PortfolioContext.Provider>
  );
};