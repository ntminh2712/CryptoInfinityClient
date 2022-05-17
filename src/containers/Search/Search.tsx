import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { SearchWrapper } from './CustomStyled';

const Search: React.FC = () => {
  // const { Search } = Input;
  // const onSearch = (value: any) => console.log(value);
  function getRandomInt(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  const searchResult = (query: string) => {
    return [
      {
        value: query,
        label: <div>{query}</div>,
      },
    ];
  };
  const [options, setOptions] = useState<any>([]);
  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <SearchWrapper>
      <div className="search-content">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: '100%' }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search size="large" placeholder="search" enterButton />
        </AutoComplete>
      </div>
    </SearchWrapper>
  );
};

export default Search;
