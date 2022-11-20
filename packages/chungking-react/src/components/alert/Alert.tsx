import clsx from 'clsx';
import * as React from 'react';

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
}

/**
 * @deprecated use `AlertProps` instead
 */
export type MessageBoxProps = AlertProps;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, variant = 'default', ...rest }, ref) => {
    return (
      <div ref={ref} className={clsx('ck-alert', `ck-alert--${variant}`)} {...rest}>
        {children}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export default Alert;
