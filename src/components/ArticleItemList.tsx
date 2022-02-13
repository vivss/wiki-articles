import React from 'react';
import Container from 'react-bootstrap/Container';
import { IArticleItem } from '../interfaces';
import ArticleItem from './ArticleItem';
interface Props {
  articleItems: IArticleItem[];
  numResults: number;
}

const ArticleItemList = ({ articleItems, numResults }: Props) => {
  const articlesToShow = articleItems.slice(0, numResults);

  return (
    <Container className="w-25">
      {articlesToShow.map((articleItem) => {
        return (
          <ArticleItem key={articleItem.article} articleItem={articleItem} />
        );
      })}
    </Container>
  );
};

export default ArticleItemList;
