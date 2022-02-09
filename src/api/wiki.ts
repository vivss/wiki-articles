import axios from 'axios';
import { IArticleItem } from '../interfaces';

interface IWikiData {
  items: {
    articles: IArticleItem[];
  };
}

const baseUrl =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access';

export default {
  get(startDate: Date) {
    const formattedDate = startDate.toLocaleDateString('en-ZA');
    console.log(formattedDate);
    return axios.get(`${baseUrl}/${formattedDate}`);
  },
};
