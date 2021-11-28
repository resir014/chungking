import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shouldForwardProp } from '@spicy-ui/styled-system';
import { AllSystemProps, allSystemProps, pseudo, PseudoProps } from '../../system';

export type UnstyledButtonProps = AllSystemProps & PseudoProps;

const UnstyledButtonStyles = css`
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  /* Normalizes line height & removes center align */
  line-height: normal;
  text-align: inherit;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

/** A button element with all styling elements removed (incl. hover/focus effects). */
const UnstyledButton = styled('button', {
  shouldForwardProp,
})<UnstyledButtonProps>(UnstyledButtonStyles, allSystemProps, pseudo);

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
