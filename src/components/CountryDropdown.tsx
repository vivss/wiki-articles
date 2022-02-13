import React from 'react';
import { CountryCodes } from '../constants/country-code';
import { setCountry } from '../interfaces';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
  country: string;
  setCountry: setCountry;
}

function CountryDropdown({ country, setCountry }: Props) {
  return (
    <div className="mx-4">
      Country
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {country}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.keys(CountryCodes).map((option) => {
            return (
              <Dropdown.Item
                as="button"
                key={option}
                onClick={() => {
                  setCountry(option);
                }}
              >
                {option.toString()}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CountryDropdown;
