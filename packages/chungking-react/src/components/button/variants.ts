export const buttonVariants = {
  default: {
    backgroundColor: 'grey.700',
    color: 'white',
    '&:hover': {
      backgroundColor: 'grey.800'
    }
  },
  primary: {
    backgroundColor: 'blue.500',
    color: 'white',
    '&:hover': {
      backgroundColor: 'blue.600'
    }
  },
  danger: {
    backgroundColor: 'red.600',
    color: 'white',
    '&:hover': {
      backgroundColor: 'red.700'
    }
  }
}

export const buttonSizes = {
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
}
