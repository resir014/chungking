import foundations from './foundations';
import components from './components';
import styles from './styles';

export const theme = {
  ...foundations,
  components,
  styles,
};

export type Theme = typeof theme;

export type Color = keyof Theme['colors'];
export type Space = keyof Theme['space'];
