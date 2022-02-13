import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IArticleItem } from '../interfaces';
interface Props {
  articleItem: IArticleItem;
}

const ArticleItem = ({ articleItem }: Props) => {
  const articleName = articleItem.article.replace(/_/g, ' ');
  return (
    <Card className="my-4 py-4" aria-label={articleName}>
      <Card.Body>
        <Row>
          <Col className="fw-bold my-auto" xs={8}>
            {articleName}
          </Col>
          <Col>{`Views: ${articleItem.rank}`}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ArticleItem;
