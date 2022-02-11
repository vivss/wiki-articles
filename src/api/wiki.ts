import axios from 'axios';

const baseUrl =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access';

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

const wikiApi = {
  get(startDate: Date) {
    return axios.get(`${baseUrl}/${formatDate(startDate)}`);
  },
};

export default wikiApi;
