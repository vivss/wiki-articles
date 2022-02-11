import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wiki';
import ArticleItemList from './ArticleItemList';
import Filters from './Filters';
import Container from 'react-bootstrap/Container';
import { IArticleItem, IFilters, ISetFilters } from '../interfaces';

const WikiArticlesContainer = () => {
  const [responseData, setResponseData] = useState<IArticleItem[]>([]);
  // TODO: date should be defaulted to yesterday
  const initialDate = new Date();
  initialDate.setDate(initialDate.getDate() - 1);
  const [filters, setFilters] = useState<IFilters>({
    date: initialDate,
    numResults: 100,
  });

  // const onFilterChange = (filters: IFilters) => {
  //   setFilters(filters, () => {
  //     getArticles();
  //   });
  // };

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
    <Container>
      <Filters filters={filters} onFilterChange={setFilters}></Filters>
      <ArticleItemList
        articleItems={responseData}
        numResults={filters.numResults}
      />
    </Container>
  );
};

export default WikiArticlesContainer;
