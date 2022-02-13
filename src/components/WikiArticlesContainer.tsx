import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wiki';
import ArticleItemList from './ArticleItemList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IArticleItem } from '../interfaces';
import DateSelector from './DateSelector';
import NumResultsDropdown from './NumResultsDropdown';
import { CountryCodes } from '../constants/country-code';
import CountryDropdown from './CountryDropdown';

const WikiArticlesContainer = () => {
  const initialDate = new Date();
  initialDate.setDate(initialDate.getDate() - 1);

  const [responseData, setResponseData] = useState<IArticleItem[] | null>([]);
  const [date, setDate] = useState<Date>(initialDate);
  const [numResults, setNumResults] = useState<number>(100);
  const [country, setCountry] = useState<string>(CountryCodes.None);

  const getAllTopArticles = async () => {
    try {
      const data = await wikiApi.getAllTopArticles(date).then((response) => {
        return response.data.items[0].articles;
      });
      setResponseData(data);
    } catch (error) {
      setResponseData(null);
      console.error(error);
    }
  };

  const getTopArticlesByCountry = async () => {
    try {
      const data = await wikiApi
        .getTopArticlesByCountry(date, country)
        .then((response) => {
          return response.data.items[0].articles;
        });
      setResponseData(data);
    } catch (error) {
      setResponseData(null);
      console.error(error);
    }
  };

  useEffect(() => {
    if (country !== CountryCodes.None) {
      getTopArticlesByCountry();
    } else {
      getAllTopArticles();
    }
  }, [date, country]);

  const Results = () => {
    if (!responseData) {
      return <div className="text-center">No results returned</div>;
    } else {
      return (
        <ArticleItemList articleItems={responseData} numResults={numResults} />
      );
    }
  };

  return (
    <Container className="justify-content-center">
      <Row className="w-50 mx-auto d-flex flex-row">
        <Col>
          <DateSelector date={date} setDate={setDate} />
        </Col>
        <Col>
          <CountryDropdown country={country} setCountry={setCountry} />
        </Col>
        <Col>
          <NumResultsDropdown
            numResults={numResults}
            setNumResults={setNumResults}
          />
        </Col>
      </Row>
      <Results />
    </Container>
  );
};

export default WikiArticlesContainer;
