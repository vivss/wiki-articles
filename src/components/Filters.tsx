import React, { useState } from 'react';
import { IFilters, ISetFilters } from '../interfaces';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

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
      Start Date
      <DatePicker selected={filters.date} onChange={onDateChange}></DatePicker>
      Number of Results
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
    </Container>
  );
};

export default Filters;
