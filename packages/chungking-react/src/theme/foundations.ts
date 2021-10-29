import { colors, shadows, sizes, space, responsive, typography } from '@resir014/chungking-core'

const foundations = {
  colors,
  shadows,
  sizes,
  space,
  ...responsive,
  ...typography
}

export const { mediaQueries } = responsive
export default foundations
