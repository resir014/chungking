const breakpoints = ['576px', '768px', '992px', '1200px']

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`
}

const responsive = {
  breakpoints,
  mediaQueries
}

export default responsive
