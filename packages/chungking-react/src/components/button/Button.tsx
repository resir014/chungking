import * as React from 'react';
import styled from '@emotion/styled';
import { sfp } from '@spicy-ui/styled-system';

import { ButtonBaseProps, ButtonProps } from './types';
import { allSystemProps, getComponentStyles, pseudo, sxMixin } from '../../system';

export const buttonProps = ['size'];

const Root = styled('button', { shouldForwardProp: sfp(buttonProps) })<ButtonBaseProps>(
  getComponentStyles('Button'),
  allSystemProps,
  pseudo,
  sxMixin,
);

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { id, className, style, disabled, children, type = 'button', variant = 'default', size = 'md', ...rest },
  ref,
) => {
  return (
    <Root
      id={id}
      ref={ref}
      type={type}
      className={className}
      style={style}
      disabled={disabled}
      variant={variant}
      size={size}
      {...rest}
    >
      {children}
    </Root>
  );
};

export default React.forwardRef(Button);
