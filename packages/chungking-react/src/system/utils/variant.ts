import { get, createParser, css } from '@spicy-ui/styled-system'

export interface VariantArgs<TStyle = Record<string, unknown>, K extends string = string> {
  key?: string
  /** Component prop, defaults to "variant" */
  prop?: string
  /** theme key for variant definitions */
  scale?: string
  /** inline theme aware variants definitions  */
  variants?: Partial<{
    [key in K]: TStyle
  }>
}

/**
 * A version of `styled-system`'s `variant`, ported to `@spicy-ui/styled-system`.
 *
 * @todo types
 * @param props variant args
 */
function variant<TStyle = Record<string, unknown>, K extends string = string>({
  scale,
  prop = 'variant',
  // enables new api
  variants = {},
  // shim for v4 API
  key
}: VariantArgs<TStyle, K>) {
  let sx: any
  if (Object.keys(variants).length) {
    sx = (value: any, scaleObject: any, props: any) => css(get(scaleObject, value, null))(props.theme)
  } else {
    sx = (value: any, scaleObject: any) => get(scaleObject, value, null)
  }
  sx.scale = scale || key
  sx.defaults = variants
  const config = {
    [prop]: sx
  }
  const parser = createParser(config)
  return parser
}

export default variant
