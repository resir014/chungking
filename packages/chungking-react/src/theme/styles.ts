import { GlobalTheme } from '../system/types'

const styles: GlobalTheme = {
  global: {
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
    '#___gatsby, #__next': {
      width: '100%',
      height: '100%',
      minHeight: '100vh'
    }
  }
}

export default styles
