import cx from 'classnames'
import { createSignal, JSX, onMount } from 'solid-js'
import { Icons } from '../icons/icons'
import { ComponentWithChildren } from '../types/types'
import { FastAverageColor } from 'fast-average-color'

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

const fac = new FastAverageColor()

export const Compartment: CompProps = ({ col = 1, row = 1, ...props }) => {
  const { image, color, label, class: classnames, children, href } = props
  const [isDarkImage, setDarkImage] = createSignal(false)

  if (children === undefined && image === undefined) {
    throw new Error('`Compartment` component required at least one of props: `children` or `image`')
  }

  const css: JSX.CSSProperties = {
    'grid-column': `span ${col}`,
    'grid-row': `span ${row}`,
    'background-color': color,
  }

  const imagePlaceAsBackground = Boolean(image && !children)

  onMount(async () => {
    if (!image) return
    const avgColor = await fac.getColorAsync(image)
    setDarkImage(avgColor.isDark)
  })

  const Wrapper = href ? Anchor : Box
  return (
    <Wrapper
      style={css}
      href={href}
      class="relative rounded-2xl border border-solid border-zinc-100 p-6 shadow-xl shadow-zinc-100 bg-cover bg-clip-border overflow-hidden"
    >
      {imagePlaceAsBackground && (
        <div class="absolute inset-0 pointer-events-none select-none">
          <img
            src={image}
            title={label}
            alt={label}
            loading="lazy"
            class="object-cover object-center"
          />
        </div>
      )}
      <div class="relative w-full h-full flex">
        {children && <div class={cx('flex flex-col', classnames)}>{children}</div>}
        {Boolean(!imagePlaceAsBackground && image) && (
          <img src={image} title={label} alt={label} class="block w-full rounded-md mt-auto" />
        )}
      </div>
      {Boolean(imagePlaceAsBackground && label) && (
        <div
          class={cx(
            'flex items-center gap-1 select-none',
            'absolute bottom-4 left-4 px-2.5 py-1.5 rounded-lg',
            'text-sm font-semibold shadow-lg bg-opacity-40 filter backdrop-blur saturate-150',
            isDarkImage() ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'
          )}
        >
          {label}
          {href && <Icons.ArrowUpRight class="w-4" />}
        </div>
      )}
    </Wrapper>
  )
}
