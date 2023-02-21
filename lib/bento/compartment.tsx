import cx from 'classnames'
import { JSX } from 'solid-js'
import { Icons } from '../icons/icons'
import { ComponentWithChildren } from '../types/types'

type Props = {
  col?: number
  row?: number
  image?: string
  color?: string
  label?: string
  href?: string
} & Pick<JSX.HTMLAttributes<HTMLDivElement>, 'class' | 'style'>

type CompProps = ComponentWithChildren<Props>

const Anchor: CompProps = ({ href, ...props }) => (
  <a href={href} target="_blank" rel="noreferrer" {...props} />
)
const Box: CompProps = props => <div {...props} />

export const Compartment: CompProps = ({ col = 1, row = 1, ...props }) => {
  const { image, color, label, class: classnames, children, href } = props

  if (children === undefined && image === undefined) {
    throw new Error('`Compartment` component required at least one of props: `children` or `image`')
  }

  const css: JSX.CSSProperties = {
    'grid-column': `span ${col}`,
    'grid-row': `span ${row}`,
    'background-color': color,
  }

  const imagePlaceAsBackground = Boolean(image && !children)
  if (imagePlaceAsBackground) css['background-image'] = `url(${image})`

  const Wrapper = href ? Anchor : Box
  return (
    <Wrapper
      style={css}
      href={href}
      class="relative flex rounded-2xl border border-solid border-zinc-100 p-6 shadow-xl shadow-zinc-100 bg-cover bg-clip-border"
    >
      {children && <div class={cx('flex flex-col', classnames)}>{children}</div>}
      {Boolean(imagePlaceAsBackground && label) && (
        <div class="px-2.5 py-1.5 text-sm font-medium bg-zinc-50 rounded-lg absolute bottom-4 left-4 shadow-lg bg-opacity-40 filter backdrop-blur saturate-150 flex items-center gap-1">
          {label}
          {href && <Icons.ArrowUpRight class="w-4" />}
        </div>
      )}
      {Boolean(!imagePlaceAsBackground && image) && (
        <img src={image} title={label} alt={label} class="block w-full rounded-md mt-auto" />
      )}
    </Wrapper>
  )
}
