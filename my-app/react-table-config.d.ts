// https://nametake.github.io/posts/2019/12/16/react-table/
// https://github.com/tannerlinsley/react-table/blob/v7.0.0-beta.24/TYPESCRIPT.md

import {
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState
} from 'react-table';

declare module 'react-table' {
  export interface TableOptions<D extends object> extends UseSortByOptions<D> {}

  export interface TableInstance<D extends object = {}>
    extends UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseSortByState<D> {}

  export interface Column<D extends object = {}>
    extends UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {}
}