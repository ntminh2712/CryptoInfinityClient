import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { SearchWrapper } from './CustomStyled';

const Search: React.FC = () => {
  const handleSearch = () => {};
  return (
    <SearchWrapper>
      <div className="search-content">
        <div className="search-content-head">
          <h1>Search</h1>
          <Input placeholder="Search" onChange={handleSearch} />
        </div>
        <div>
          <Link to="/salary">業界</Link>
          <Link to="/salary">地域</Link>
          <Link to="/salary">職種</Link>
          <Link to="/salary">制度や特徴</Link>
          <Link to="/salary">使用状況</Link>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
