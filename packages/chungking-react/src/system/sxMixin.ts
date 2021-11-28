import { css } from '@spicy-ui/styled-system';
import { PseudoProps } from './parsers';
import { AllSystemProps } from './props';

export interface SxProps {
  sx?: Partial<Record<keyof AllSystemProps & PseudoProps, any>>;
}

export function sxMixin(p: SxProps): any {
  return p.sx ? css(p.sx) : {};
}
