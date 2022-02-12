import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wiki';
import ArticleItemList from './ArticleItemList';
import Filters from './Filters';
import Container from 'react-bootstrap/Container';
import { IArticleItem, IFilters, ISetFilters } from '../interfaces';

/*
TODO:
- separate date selection and numResults
- make it so numResults change doesn't make a new request
- add pinning option
*/
const WikiArticlesContainer = () => {
  const [responseData, setResponseData] = useState<IArticleItem[]>([]);
  const initialDate = new Date();
  initialDate.setDate(initialDate.getDate() - 1);
  const [filters, setFilters] = useState<IFilters>({
    date: initialDate,
    numResults: 100,
  });

  const getArticles = async () => {
    try {
      let data = await wikiApi.get(filters.date).then((response) => {
        return response.data.items[0].articles;
      });
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [filters]);

  return (
    <Container className="justify-content-md-center w-25">
      <Filters filters={filters} onFilterChange={setFilters}></Filters>
      <ArticleItemList
        articleItems={responseData}
        numResults={filters.numResults}
      />
    </Container>
  );
};

export default WikiArticlesContainer;
