export interface IArticleItem {
  article: string;
  views: number;
  rank: number;
}

export type setDate = (date: Date) => void;
export type setNumResults = (numResults: number) => void;
export type setCountry = (country: string) => void;
