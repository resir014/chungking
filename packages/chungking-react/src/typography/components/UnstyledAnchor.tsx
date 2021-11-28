import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shouldForwardProp } from '@spicy-ui/styled-system';
import { allSystemProps, AllSystemProps, pseudo, PseudoProps } from '../../system';

export type UnstyledAnchorProps = AllSystemProps & PseudoProps;

const UnstyledAnchorStyles = css`
  font-style: inherit;
  color: inherit;
  background-color: transparent;
  font-size: inherit;
  text-decoration: none;
  font-variant: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: inherit;
  border: inherit;
  outline: inherit;
  box-shadow: inherit;

  &:hover,
  &:focus,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
    border-radius: inherit;
    border: inherit;
    outline: inherit;
    box-shadow: inherit;
  }
`;

/** An anchor element with all styling elements removed (incl. hover/focus effects). */
const UnstyledAnchor = styled('a', {
  shouldForwardProp,
})<UnstyledAnchorProps>(UnstyledAnchorStyles, allSystemProps, pseudo);

UnstyledAnchor.displayName = 'UnstyledAnchor';

export default UnstyledAnchor;
