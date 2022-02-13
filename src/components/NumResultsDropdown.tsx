import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { setNumResults } from '../interfaces';
interface Props {
  numResults: number;
  setNumResults: setNumResults;
}

const NumResultsDropdown = ({ numResults, setNumResults }: Props) => {
  const numResultOptions = [25, 50, 75, 100, 200];

  return (
    <div>
      Results
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {numResults.toString()}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {numResultOptions.map((option) => {
            return (
              <Dropdown.Item
                as="button"
                key={option}
                onClick={() => {
                  setNumResults(option);
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
};

export default NumResultsDropdown;
