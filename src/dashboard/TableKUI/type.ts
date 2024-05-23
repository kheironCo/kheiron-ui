/**
 * @template V is a value to recibe from the Body
 */
export type RenderBodyProps<V, K> = { value: V; key: K; row: number; column: number };
export type RenderHeadProps<V, K> = { value: V; key: K; column: number };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType<T> = T extends unknown ? any : T;

export type TableKUIProps<B, H extends string, C extends string> = {
  keys: C[];
  head: Record<NoInfer<C>, H>;
  body: Record<NoInfer<C>, AnyType<B>>[];
  renderHead?: (args: RenderHeadProps<H, NoInfer<C>>) => JSX.Element;
  renderBody?: (args: RenderBodyProps<AnyType<B>, NoInfer<C>>) => JSX.Element;
};
