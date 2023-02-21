import { ComponentWithChildren } from '../types/types'

type Props = {
  col?: number
  row?: number
}

export const Placeholder: ComponentWithChildren<Props> = ({ col = 1, row = 1 }) => (
  <div style={{ 'grid-column': `span ${col}`, 'grid-row': `span ${row}` }} />
)
