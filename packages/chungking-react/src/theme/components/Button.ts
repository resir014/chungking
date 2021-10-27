import { ComponentThemeConfig } from '../../system'

const buttonHoverFocusStyles = {
  outline: 'none',
  textDecoration: 'none'
}

const Button: ComponentThemeConfig = {
  propToScaleMap: [
    ['variant', 'variants'],
    ['size', 'sizes']
  ],
  baseStyle: () => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    border: 'none',
    background: 'none',
    fontFamily: 'sansSerif',
    userSelect: 'none',
    outline: 'none',
    width: 'auto',
    cursor: 'pointer',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5
    },
    _hover: buttonHoverFocusStyles,
    _focus: buttonHoverFocusStyles,
    _active: buttonHoverFocusStyles
  }),
  scales: {
    sizes: {
      sm: {
        px: 'md',
        height: '32px',
        minWidth: '32px',
        fontSize: '14px',
        borderRadius: 6
      },
      md: {
        px: 'lg',
        height: '40px',
        minWidth: '40px',
        fontSize: '16px',
        borderRadius: 8
      },
      lg: {
        px: 'xl',
        height: '48px',
        minWidth: '48px',
        fontSize: '20px',
        borderRadius: 10
      }
    },
    variants: {
      default: {
        backgroundColor: 'grey.700',
        color: 'white',
        _hover: {
          backgroundColor: 'grey.800'
        }
      },
      primary: {
        backgroundColor: 'blue.500',
        color: 'white',
        _hover: {
          backgroundColor: 'blue.600'
        }
      },
      danger: {
        backgroundColor: 'red.600',
        color: 'white',
        _hover: {
          backgroundColor: 'red.700'
        }
      }
    }
  }
}

export default Button
