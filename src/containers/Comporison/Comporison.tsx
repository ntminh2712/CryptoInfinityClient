import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { ComporisonWrapper } from './CustomStyled';

const Comporison: React.FC = () => {
  const history = useHistory();
  const handleSearch = () => {};
  return (
    <ComporisonWrapper>
      <div className="comporison-content">
        <div className="comporison-content-head">
          <h1>比較</h1>
          <Input placeholder="Search" onChange={handleSearch} onPressEnter={()=>{
            history.push('/comparisonresult')
          }}/>
        </div>
        <div>
          <Link to="/">業界</Link>
          <Link to="/">地域</Link>
          <Link to="/">職種</Link>
          <Link to="/">制度や特徴</Link>
          <Link to="/">使用状況</Link>
        </div>
      </div>
    </ComporisonWrapper>
  );
};

export default Comporison;
