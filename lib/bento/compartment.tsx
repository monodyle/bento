import cx from 'classnames'
import { JSX } from 'solid-js'
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
    'background-image': image && `url(${image})`,
    'background-color': color,
  }

  const Wrapper = href ? Anchor : Box
  return (
    <Wrapper
      style={css}
      href={href}
      class={cx(
        'relative block rounded-2xl border border-solid border-zinc-100 p-6 shadow-xl shadow-zinc-100 bg-cover bg-clip-border',
        'flex',
        classnames
      )}
    >
      {children && <div class="flex flex-col">{children}</div>}
      {Boolean(image && label) && (
        <div class="px-2.5 py-1.5 text-sm font-medium bg-zinc-50 rounded-lg absolute bottom-4 left-4 shadow-lg bg-opacity-40 filter backdrop-blur saturate-150">
          {label}
        </div>
      )}
    </Wrapper>
  )
}
