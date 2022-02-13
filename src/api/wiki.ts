import axios from 'axios';
import { CountryCodes } from '../constants/country-code';

// could just use moment.js if it was worth pulling in the package
function formatDate(date: Date) {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('/');
}

const baseUrl = 'https://wikimedia.org/api/rest_v1/metrics/pageviews';
const allTopArticlesPath = 'top/en.wikipedia/all-access';
const topArticlesByCountryPath = 'top-per-country';

const wikiApi = {
  getAllTopArticles(startDate: Date) {
    return axios.get(
      `${baseUrl}/${allTopArticlesPath}/${formatDate(startDate)}`
    );
  },
  getTopArticlesByCountry(startDate: Date, country: string) {
    return axios.get(
      `${baseUrl}/${topArticlesByCountryPath}/${
        CountryCodes[country]
      }/all-access/${formatDate(startDate)}`
    );
  },
};

export default wikiApi;
