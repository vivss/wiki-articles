import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wiki';
import ArticleItemList from './ArticleItemList';
import Filters from './Filters';
import Container from 'react-bootstrap/Container';
import { IArticleItem } from '../interfaces';

const WikiArticlesContainer = () => {
  const [responseData, setResponseData] = useState<IArticleItem[]>([]);

  const getArticles = async () => {
    const date = new Date(2015, 10, 10);
    let data = await wikiApi.get(date).then((response) => {
      return response.data.items[0].articles;
    });
    setResponseData(data);
  };

  useEffect(() => {
    getArticles();
  });

  return (
    <Container>
      <Filters></Filters>
      <ArticleItemList articleItems={responseData} />
    </Container>
  );
};

export default WikiArticlesContainer;
