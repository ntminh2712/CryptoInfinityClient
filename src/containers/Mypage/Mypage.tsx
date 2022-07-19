import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { MypageWrapper } from './CustomStyled';

const Mypage: React.FC = () => {
  return (
    <MypageWrapper>
      <div className="mypage-content">
        <h1>マイページ</h1>
        <div>
          <Link to="/favorite">お気に入り登録した企業</Link>
          <Link to="/fromcorporate">企業からのメール</Link>
          <Link to="/schedule">スケジュール</Link>
          <Link to="/application">応募済みの企業</Link>
        </div>
      </div>
    </MypageWrapper>
  );
};

export default Mypage;
