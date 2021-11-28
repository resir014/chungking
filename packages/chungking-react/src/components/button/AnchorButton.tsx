import * as React from 'react';
import styled from '@emotion/styled';
import { sfp } from '@spicy-ui/styled-system';

import { ButtonBaseProps, AnchorButtonProps } from './types';
import { allSystemProps, getComponentStyles, pseudo, sxMixin } from '../../system';

export const buttonProps = ['size'];

const Root = styled('a', { shouldForwardProp: sfp(buttonProps) })<ButtonBaseProps>(
  getComponentStyles('Button'),
  allSystemProps,
  pseudo,
  sxMixin,
);

const AnchorButton: React.ForwardRefRenderFunction<HTMLAnchorElement, AnchorButtonProps> = (
  { id, className, style, children, variant = 'default', size = 'md', ...rest },
  ref,
) => {
  return (
    <Root id={id} ref={ref} className={className} style={style} variant={variant} size={size} {...rest}>
      {children}
    </Root>
  );
};

export default React.forwardRef(AnchorButton);
