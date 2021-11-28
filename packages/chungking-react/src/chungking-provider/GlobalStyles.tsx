import * as React from 'react';
import { Global, Interpolation, Theme } from '@emotion/react';
import { css, get } from '@spicy-ui/styled-system';
import { runIfFn } from '../utils';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={(theme: Theme) => {
        const styleObjectOrFn = get(theme, 'styles.global');
        const globalStyles = runIfFn(styleObjectOrFn, { theme });
        if (!globalStyles) return undefined;
        const styles = css(globalStyles)(theme);
        return styles as Interpolation<Theme>;
      }}
    />
  );
};

export default GlobalStyles;
