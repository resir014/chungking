import { css } from '@emotion/react'
import { transparentize } from 'polished'
import { Theme } from '../utils'

export const styles = (theme: Theme) => css`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    font-family: ${theme.fonts.sansSerif};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    color: ${theme.colors.grey[50]};
    background-color: ${theme.colors.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  blockquote {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 0 3px ${transparentize(0.4, theme.colors.turquoise[400])};
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 0 ${theme.space.md}px;
  }

  figure {
    margin: ${theme.space.xl}px 0;
  }

  figcaption {
    font-size: 80%;
  }

  code,
  pre {
    font-family: ${theme.fonts.monospace};
  }

  #___gatsby,
  #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  table {
    margin-bottom: ${theme.space.sm}px;
    width: 100%;
    font-size: 85%;
    border: 1px solid ${theme.colors.grey[100]};
    border-collapse: collapse;

    td,
    th {
      padding: ${theme.space.xxs}px ${theme.space.xs}px;
      border: 1px solid ${theme.colors.grey[100]};
    }

    th {
      text-align: left;
    }

    tbody tr:nth-of-type(odd) td,
    tbody tr:nth-of-type(odd) th {
      background-color: ${theme.colors.grey[50]};
    }
  }

  small {
    font-size: 75%;
  }

  strong {
    color: ${theme.colors.white};
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
    margin-bottom: ${theme.space.xs}px;
  }

  hr {
    position: relative;
    margin: ${theme.space.xl}px 0;
    border: 0;
    border-bottom: 1px solid ${theme.colors.grey[800]};
  }

  abbr {
    font-size: 85%;
    font-weight: bold;

    &[title] {
      cursor: help;
      border-bottom: 1px dotted ${theme.colors.grey[200]};
    }
  }

  .hidden {
    display: none;
  }

  .responsive-embed {
    position: relative;
    padding-top: 25px;
    padding-bottom: 56.25%;
    height: 0;

    div,
    embed,
    object {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
`
