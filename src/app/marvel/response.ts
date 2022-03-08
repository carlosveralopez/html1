export interface MarvelData<T> {
  limit: number;
  count: number;
  offset: number;
  total: number;
  results: T[];
}

export interface MarvelResponse<T> {
  data: MarvelData<T>;
}
