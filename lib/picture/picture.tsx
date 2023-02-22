import { Component, JSX } from 'solid-js'

export type ImageSet = {
  png?: string
  jpg?: string
  webp?: string
  src?: string
}

type Props = ImageSet & Pick<JSX.ImgHTMLAttributes<HTMLImageElement>, 'class' | 'title' | 'alt'>

export const Picture: Component<Props> = ({ png, jpg, webp, src, class: classnames, ...props }) => {
  const atLeastOnce = Boolean(webp || jpg || png)
  if (!atLeastOnce && src === undefined) {
    throw new Error('`Picture` component should take at least once prop')
  }

  const defaultImage = src || webp || jpg || png

  return (
    <picture class={classnames}>
      {webp && <source srcset={webp} type="image/webp" />}
      {jpg && <source srcset={jpg} type="image/jpg" />}
      {png && <source srcset={png} type="image/png" />}
      <img src={defaultImage} loading="lazy" {...props} />
    </picture>
  )
}
