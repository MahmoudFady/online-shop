export interface IPagination {
  pageIndex: number;
  limit: number;
  skip: number;
  maxPageIndex: number;
  last: boolean;
  hasPaginate: boolean;
  total: number;
}
