import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SearchResultWrapper } from './CustomStyled';

const SearchResult: React.FC = () => {
  const history = useHistory();

  return (
    <SearchResultWrapper>
      <div className="searchResult-content">
        <div className="searchResult-content-head">
          <h1>Search</h1>
          <Input placeholder="Search" onChange={() => {}} />
          <div className="searchResult-amount">
            <p>123 result</p>
          </div>
        </div>
        <div>
          <p>新着順</p>
          <p>締切間近順</p>
          <p>おすすめ順</p>
        </div>
        <div
          className="searchResult-item"
          onClick={() => history.push('/corporateinfo')}
        >
          <div>
            <img
              src="https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png"
              alt="#"
            />
          </div>
          <div>
            <p>業種</p>
            <p>勤 務 地一都三県（東京都・埼玉県・千葉県・神奈川 県）</p>
          </div>
        </div>
      </div>
    </SearchResultWrapper>
  );
};

export default SearchResult;
