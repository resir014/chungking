import { Colors } from '@resir014/chungking-core';
import clsx from 'clsx';
import * as React from 'react';

type ColorScheme = keyof Omit<Colors, 'white' | 'black'>;

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'outline' | 'solid' | 'subtle';
  size?: 'md' | 'lg';
  colorScheme?: ColorScheme;
  color?: string;
  children?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'solid', size = 'md', colorScheme = 'grey', ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx('ck-badge', `ck-badge--${variant}`, `ck-badge--${size}`, `ck-badge--${colorScheme}`)}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  variant: 'solid',
  colorScheme: 'grey',
};

export default Badge;
