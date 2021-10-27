import { transparentize } from 'polished'
import { GlobalTheme } from '../system'

const styles: GlobalTheme = {
  global: ({ theme }) => ({
    body: {
      position: 'relative',
      minHeight: '100%',
      margin: 0,
      color: 'grey.50',
      backgroundColor: 'black',
      fontFamily: 'sansSerif',
      lineHeight: 'base'
    },
    '*::placeholder': {
      color: 'grey.400'
    },
    '*, *::before, &::after': {
      borderColor: 'grey.200',
      wordWrap: 'break-word'
    },
    'a:focus': {
      outline: 'none',
      boxShadow: `${transparentize(0.4, theme.colors.green[500])} 0 0 0 3px`
    },
    '#___gatsby, #__next': {
      width: '100%',
      height: '100%',
      minHeight: '100vh'
    }
  })
}

export default styles
