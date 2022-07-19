import React, { useState } from 'react';
import { Button, Input, AutoComplete, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { FavoriteWrapper } from './CustomStyled';

const Favorite: React.FC = () => {
  return (
    <FavoriteWrapper>
      <div className="favorite-content">
        <p>比較する</p>
        <Link to="/comporison">詳細設定</Link>
        <div className="favorite-content-companies">
          <p>株式会社</p>
          <p>有限会社</p>
        </div>
      </div>
    </FavoriteWrapper>
  );
};

export default Favorite;
