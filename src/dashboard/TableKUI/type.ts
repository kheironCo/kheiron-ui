import { AtomDivProps, AtomTrProps } from '../../element';

export type Size = { width?: string; height?: string };

/**
 * @template V - Tipo del valor recibido del cuerpo.
 * @template K - Tipo de la clave asociada.
 * @template VR - Tipo del valor de la fila completa.
 */
export type RenderBodyProps<V, K, VR> = {
  value: V; // Valor de la celda actual.
  key: K; // Clave de la celda actual.
  row: number; // Índice de la fila actual.
  column: number; // Índice de la columna actual.
  valueRow: VR; // Valor de toda la fila.
};
/**
 * @template V - Tipo del valor del encabezado.
 * @template K - Tipo de la clave asociada.
 */
export type RenderHeadProps<V, K> = {
  value: V; // Valor de la celda del encabezado.
  key: K; // Clave de la celda del encabezado.
  column: number; // Índice de la columna.
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType<T> = T extends unknown ? any : T;

/**
 * @template B - Tipo del cuerpo de la tabla.
 * @template H - Tipo del encabezado de la tabla.
 * @template C - Tipo de las claves de las columnas.
 */
export type TableKUIProps<B, H extends string, C extends string> = AtomDivProps & {
  /**
   * @template C List To string
   * @example string[]
   * ['id', 'name', 'email']
   */
  keys: C[]; // Lista de claves de columnas.
  head: Record<NoInfer<C>, H>; // Encabezado de la tabla.
  body: Record<NoInfer<C>, AnyType<B>>[]; // Cuerpo de la tabla.
  limit?: number;
  neighbors?: number;
  renderHead?: (args: RenderHeadProps<H, NoInfer<C>>) => JSX.Element; // Función para renderizar el encabezado.
  renderBody?: (
    args: RenderBodyProps<AnyType<B>, NoInfer<C>, Record<NoInfer<C>, AnyType<B>>>,
  ) => JSX.Element; // Función para renderizar el cuerpo.
  onRow?: (args: Record<NoInfer<C>, AnyType<B>>) => AtomTrProps;
  TableSx?: Size;
};

export type RenderTableHeadProps<H extends string, C extends string> = {
  keyType: C; // Lista de claves de columnas.
  renderHead?: (args: RenderHeadProps<H, NoInfer<C>>) => JSX.Element; // Función para renderizar el encabezado.
  head: Record<NoInfer<C>, H>;
  column: number;
};

export type RenderTableBodyProps<B, C extends string> = {
  /**
   * @template C List To string
   * @example string[]
   * ['id', 'name', 'email']
   */
  keys: C[]; // Lista de claves de columnas.
  renderBody?: (
    args: RenderBodyProps<AnyType<B>, NoInfer<C>, Record<NoInfer<C>, AnyType<B>>>,
  ) => JSX.Element; // Función para renderizar el cuerpo.
  valueRow: Record<NoInfer<C>, AnyType<B>>;
  row: number;
};
