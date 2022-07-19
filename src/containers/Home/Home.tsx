import React from 'react';
import { Button, Divider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeWrapper, FavoriteItem } from './CustomStyled';

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  return (
    <HomeWrapper>
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <Button
              type="primary"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
            >
              My STO
            </Button>
          </div>
          <div className="home-content-top-right">
            <Link to="/login">Login |</Link>
            <Link to="/favorite">Favorite List |</Link>
            <Link to="/mypage">My page </Link>
            {/* <Link to="/favorite">Annual income simulation</Link> */}
          </div>
        </div>
        <Divider />
        <div className="home-content-bottom">
          <div className="home-content-bottom-top">
            <Link to="/search">求人検索</Link>
            <Link to="/newmember">新規会員登録</Link>
          </div>
          <div className="home-content-bottom-favorite">
            <FavoriteItem onClick={() => history.push('/favorite')}>
              <span>Favorite Item</span>
            </FavoriteItem>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default ForgetPassword;
