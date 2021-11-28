import deepmerge from 'deepmerge';
import * as React from 'react';
import CSSReset from '@chakra-ui/css-reset';
import { ThemeProvider } from '@emotion/react';
import { theme as defaultTheme, Theme } from '../theme';
import GlobalStyles from './GlobalStyles';

export interface ChungkingProviderProps {
  /**
   * If you want to extend the global styles set to `true` and inject them
   * manually via `injectGlobalStyles`.
   */
  disableInjection?: boolean;
  /**
   * If you want to disable injection of chakra-ui's CSS Resets, set to `true`.
   */
  disableResetCSS?: boolean;
  /** Custom theme to be merged with the default theme. */
  theme?: Partial<Theme>;
}

const ChungkingProvider: React.FC<ChungkingProviderProps> = ({
  children,
  disableResetCSS,
  disableInjection,
  theme = {},
}) => {
  const mergedTheme = React.useMemo(() => deepmerge(defaultTheme, theme), [theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      {!disableResetCSS && <CSSReset />}
      {!disableInjection && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
};

export default ChungkingProvider;
