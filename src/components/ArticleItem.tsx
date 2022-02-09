import React from 'react';
import Card from 'react-bootstrap/Card';
import { IArticleItem } from '../interfaces';

interface Props {
  articleItem: IArticleItem;
}

const ArticleItem = ({ articleItem }: Props) => {
  const articleName = articleItem.article.replace(/_/g, ' ');
  return (
    <Card>
      <Card.Body>{`${articleName} - rank ${articleItem.rank}`}</Card.Body>
    </Card>
  );
};

export default ArticleItem;
