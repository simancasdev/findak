export type List<T> = {
  offset: number;
  limit: number;
  currentPage: number;
  totalPages: number;
  totalRecord: number;
  search: string;
  data: T;
};
