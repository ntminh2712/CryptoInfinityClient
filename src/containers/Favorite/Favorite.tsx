import React, { useState } from 'react';
import { Button, Input, AutoComplete, Divider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { FavoriteWrapper } from './CustomStyled';

const Favorite: React.FC = () => {
  const history = useHistory();

  return (
    <FavoriteWrapper>
      <div className="favorite-content">
        <p className="favorite-content-title">お気に入りリスト</p>
        <div className="favorite-content-companies">
          {/* <p>株式会社</p>
          <p>有限会社</p> */}
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
        <p>比較する</p>
        <Link to="/comporison">詳細設定</Link>
      </div>
    </FavoriteWrapper>
  );
};

export default Favorite;
