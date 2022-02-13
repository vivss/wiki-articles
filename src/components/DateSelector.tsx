import React, { useState } from 'react';
import { setDate } from '../interfaces';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  date: Date;
  setDate: setDate;
}

const Filters = ({ date, setDate }: Props) => {
  const onDateChange = (date: Date) => {
    setDate(date);
  };
  return (
    <div>
      Start Date
      <DatePicker selected={date} onChange={onDateChange}></DatePicker>
    </div>
  );
};

export default Filters;
