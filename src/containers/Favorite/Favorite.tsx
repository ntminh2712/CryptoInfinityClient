import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { FavoriteWrapper } from './CustomStyled';

const Favorite: React.FC = () => {
  return (
    <FavoriteWrapper>
      <div className="favorite-content">
      Favorite
      </div>
    </FavoriteWrapper>
  );
};

export default Favorite;
