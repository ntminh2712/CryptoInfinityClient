import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { SearchWrapper } from './CustomStyled';

const Search: React.FC = () => {
  const searchResult = (query: string) => {
    return [
      {
        value: query,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{query}</span>
            <span>{query.length} result</span>
          </div>
        ),
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
