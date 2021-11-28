import { css } from '@emotion/react';
import { darken, transparentize } from 'polished';
import { theme } from '../../theme';

export const DisabledButtonStyles = css`
  &:disabled,
  &.disabled {
    background-color: ${theme.colors.grey[700]};
    color: ${theme.colors.white};
    user-select: none;
    opacity: 0.5;
    cursor: not-allowed;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export const GhostedButtonStyles = css`
  margin: -8px -12px;
  padding: 8px 12px;
  border-radius: 8px;

  &:not(:disabled):not(.disabled) {
    color: ${theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${transparentize(0.9, theme.colors.white)};
    }

    &:focus,
    &:active {
      box-shadow: 0 0 0 3px ${transparentize(0.4, theme.colors.turquoise[400])};
    }
  }

  &:disabled,
  &.disabled {
    color: ${darken(0.5, theme.colors.white)};
    user-select: none;
    cursor: not-allowed;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export const ButtonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-family: ${theme.fonts.sansSerif};
  user-select: none;
  outline: none;
  width: auto;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    text-decoration: none;
  }
`;
