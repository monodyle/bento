import cx from 'classnames'
import { createSignal, JSX, onCleanup, onMount } from 'solid-js'
import { ComponentWithChildren } from '../types/types'

type Props = {
  title?: string
}

export const Bento: ComponentWithChildren<Props> = ({ children, title }) => {
  const [css, setCss] = createSignal<JSX.CSSProperties>(
    {},
    { equals: (prev, next) => prev['grid-template-rows'] === next['grid-template-rows'] }
  )

  const changeMobileSize = () => {
    if (window.innerWidth >= 428) {
      setCss({})
      return
    }
    const size = (window.innerWidth - 24 * 3) / 2
    setCss({
      'grid-template-rows': `repeat(auto-fill, minmax(${size}px, 1fr))`,
      'grid-template-columns': `repeat(2, ${size}px)`,
    })
  }

  onMount(() => {
    changeMobileSize()
    window.addEventListener('resize', changeMobileSize)
  })

  onCleanup(() => void window.removeEventListener('resize', changeMobileSize))

  return (
    <div class="mb-8">
      {title && <div class="p-6 text-lg font-semibold">{title}</div>}
      <div
        style={css()}
        class={cx(
          'grid auto-rows-fr',
          'gap-6 grid-rows-[repeat(auto-fill,minmax(178px,1fr))] grid-cols-[repeat(2,178px)]',
          'xl:gap-10 xl:grid-cols-[repeat(4,175px)] xl:grid-rows-[repeat(auto-fill,minmax(175px,1fr))]'
        )}
      >
        {children}
      </div>
    </div>
  )
}
