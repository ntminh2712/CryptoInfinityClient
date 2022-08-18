import React, { useState } from 'react';
import { Input, AutoComplete, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SalaryWrapper } from './CustomStyled';

const Search: React.FC = () => {
  const history = useHistory();

  const [options, setOptions] = useState<any>([]);

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['指定しない', 'メーカー', '商社', '流通・小売り',];
  const handleSearch = () => {};
  const handleEnter = () => {
    history.push('/search-result');
  };
  return (
    <SalaryWrapper>
      <div className="salary-content">
        <div className="salary-content-head">
          <h1>検索</h1>
          <Input
            placeholder="Search"
            onChange={handleSearch}
            onPressEnter={handleEnter}
          />
        </div>
        <div>
          <Link to="/search-result">業界</Link>
          {/* <Link to="/search-result">地域</Link>
          <Link to="/search-result">職種</Link>
          <Link to="/search-result">制度や特徴</Link>
          <Link to="/search-result">使用状況</Link> */}
        </div>
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
