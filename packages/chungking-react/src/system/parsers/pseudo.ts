import { pseudoMixin, PseudoProps as StyledPseudoProps } from '@spicy-ui/styled-system';
import { AllSystemProps } from '../props';

export type PseudoProps = Partial<Record<keyof StyledPseudoProps, AllSystemProps>>;

export const pseudo = pseudoMixin;
