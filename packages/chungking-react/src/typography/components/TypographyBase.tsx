/* eslint-disable no-underscore-dangle */
import * as React from 'react';

import { AllSystemProps, PseudoProps, SxProps } from '../../system';

export interface TypographyBaseProps extends AllSystemProps, PseudoProps, SxProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** Color value of the text. */
  color?: string;
}
