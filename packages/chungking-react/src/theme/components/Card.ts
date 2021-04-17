import { ComponentThemeConfig } from '../types'

const Card: ComponentThemeConfig = {
  propToScaleMap: [['elevation', 'elevations']],
  scales: {
    elevations: {
      single: {
        boxShadow: 'single'
      },
      double: {
        boxShadow: 'double'
      }
    }
  }
}

export default Card
