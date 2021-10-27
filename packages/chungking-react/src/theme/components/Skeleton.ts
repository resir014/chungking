import { ComponentThemeConfig } from '../../system'

const Skeleton: ComponentThemeConfig = {
  baseStyle: () => ({
    display: 'block',
    width: '100%',
    minWidth: 200,
    height: 20,
    backgroundColor: 'grey.700'
  })
}

export default Skeleton
