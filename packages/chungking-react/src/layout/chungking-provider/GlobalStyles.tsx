import * as React from 'react'
import { Global, useTheme } from '@emotion/react'
import { Theme } from '../../theme'
import styles from './styles'

const GlobalStyles: React.FC = () => {
  const theme = useTheme() as Theme

  return <Global styles={styles(theme)} />
}

GlobalStyles.displayName = 'GlobalStyles'

export default GlobalStyles
