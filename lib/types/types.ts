import { JSX, Component } from 'solid-js'

export type ComponentWithChildren<T = {}> = Component<
  { children?: JSX.Element } & T
>
