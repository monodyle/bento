import { JSX, Component } from 'solid-js'

export type ComponentWithChildren<T = Record<string, unknown>> = Component<
  { children?: JSX.Element } & T
>
