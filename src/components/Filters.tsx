import React, { useState } from 'react';
import { IFilters, ISetFilters } from '../interfaces';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface Props {
  filters: IFilters;
  onFilterChange: ISetFilters;
}

const Filters = ({ filters, onFilterChange }: Props) => {
  const onDateChange = (date: Date) => {
    console.log('date', date);
    onFilterChange({ ...filters, date });
  };

  const setNumResultsSelected = (numResults: number) => {
    onFilterChange({ ...filters, numResults });
  };

  const numResultOptions = [25, 50, 75, 100, 200];

  return (
    <Container>
      <Row>
        <Col>
          Start Date
          <DatePicker selected={filters.date} onChange={onDateChange}></DatePicker>
        </Col>
        <Col>
          Results
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {filters.numResults.toString()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {numResultOptions.map((option) => {
                return (
                  <Dropdown.Item
                    as="button"
                    key={option}
                    onClick={() => {
                      setNumResultsSelected(option);
                    }}
                  >
                    {option.toString()}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
