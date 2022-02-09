import React from 'react';
import Container from 'react-bootstrap/Container';
import { IArticleItem } from '../interfaces';
import ArticleItem from './ArticleItem';
interface Props {
  articleItems: IArticleItem[];
}

const ArticleItemList = ({ articleItems }: Props) => {
  return (
    <Container>
      {articleItems.map((articleItem) => {
        return (
          <ArticleItem key={articleItem.article} articleItem={articleItem} />
        );
      })}
    </Container>
  );
};

export default ArticleItemList;
