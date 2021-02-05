import colors from './colors'
import responsive, { mediaQueries } from './responsive'
import shadows from './shadows'
import sizes from './sizes'
import space from './space'
import typography from './typography'

const foundations = {
  colors,
  space,
  sizes,
  ...typography,
  shadows,
  ...responsive
}

export { mediaQueries }
export default foundations
