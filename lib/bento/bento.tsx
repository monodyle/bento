import { ComponentWithChildren } from '../types/types'

type Props = {
  title?: string
}

export const Bento: ComponentWithChildren<Props> = ({ children, title }) => {
  return (
    <div class='mb-8'>
      {title && <div class='p-6 text-lg font-semibold'>{title}</div>}
      <div class='grid auto-rows-fr xl:gap-10 gap-6 grid-rows-[repeat(auto-fill,minmax(178px,1fr))] grid-cols-[repeat(2,178px)] xl:grid-cols-[repeat(4,175px)] xl:grid-rows-[repeat(auto-fill,minmax(175px,1fr))]'>
        {children}
      </div>
    </div>
  )
}
