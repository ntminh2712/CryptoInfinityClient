import React, { useState } from 'react';
import { Input, AutoComplete, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { SalaryWrapper } from './CustomStyled';

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

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['Apple', 'Pear', 'Orange','Banana', 'Test'];

  return (
    <SalaryWrapper>
      <div className="salary-content">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: '100%' }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search size="large" placeholder="search" enterButton />
        </AutoComplete>
        <div className="salary-content-checkboxs">
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
        </div>
      </div>
    </SalaryWrapper>
  );
};

export default Search;
