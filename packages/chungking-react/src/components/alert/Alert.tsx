import * as React from 'react';
import { useComponentStyles } from '../../system';
import { Box, BoxProps } from '../../layout';

export interface AlertProps extends BoxProps {
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
}

/**
 * @deprecated use `AlertProps` instead
 */
export type MessageBoxProps = AlertProps;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, variant = 'default', sx, ...rest }, ref) => {
    const styles = useComponentStyles('Alert', { variant });

    return (
      <Box ref={ref} className={className} boxShadow="single" sx={{ ...styles, ...sx }} {...rest}>
        {children}
      </Box>
    );
  },
);

Alert.displayName = 'Alert';

/**
 * @deprecated use `Alert` instead
 */
export const MessageBox = Alert;

export default Alert;
