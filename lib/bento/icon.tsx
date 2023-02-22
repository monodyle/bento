import { Component, JSX } from 'solid-js'

type Props = {
  image?: string
  children?: JSX.Element
  padding?: number
}

export const Icon: Component<Props> = ({ image, children, padding }) => {
  return (
    <div
      class="aspect-square overflow-hidden rounded-lg w-10 h-10 shadow-md"
      style={{ padding: padding && `${padding}px` }}
    >
      {image && <img src={image} class="w-full h-full" loading="lazy" />}
      {children}
    </div>
  )
}
