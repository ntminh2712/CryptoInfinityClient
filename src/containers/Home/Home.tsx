import React from 'react';
import { Button, Divider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeWrapper, FavoriteItem } from './CustomStyled';

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  return (
    <HomeWrapper>
      <div className="home-content">
        <div className="home-content-bottom">
          <div className="home-content-bottom-top">
            <Link to="/search">
              <span>求人検索</span>
            </Link>
            <Link to="/newmember">
              <span>新規会員登録</span>
            </Link>
          </div>
          <div className="home-content-bottom-favorite">
            <FavoriteItem onClick={() => history.push('/favorite')}>
              <div>
                <p>スタンバイ</p>
                <p>https://jp.indeed.com/</p>
              </div>
              <div>
                <p>有効掲載求人数</p>
                <p>約 20,000,000 件</p>
              </div>
              <div>
                <p>
                  Indeed（インディード）では、あなたの次のキャリアを探すためのさまざまな求人情報をまとめて検索できます。求人検索や履歴書、企業クチコミなどのツールであなたの就職活動をサポートします。
                </p>
              </div>
            </FavoriteItem>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default ForgetPassword;
