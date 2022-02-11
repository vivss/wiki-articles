export interface IArticleItem {
  article: string;
  views: number;
  rank: number;
}
export interface IFilters {
  numResults: number;
  date: Date;
}

export type ISetFilters = (filters: IFilters) => void;
