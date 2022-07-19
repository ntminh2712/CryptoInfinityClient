import React, { useState } from 'react';
import { Button, Space, Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { NewmemberWrapper } from './CustomStyled';

const Newmember: React.FC = () => {
  const history = useHistory();
  return (
    <NewmemberWrapper>
      <div className="newmember-content">
        <h1>新規会員登録</h1>
        <div className="newmember-desc">
          <div>
            <p>登録に必要な</p>
            <p>情報項目</p>
          </div>
          <div>
            <p>登録に必要な</p>
            <p>情報入力欄</p>
          </div>
        </div>
        <div>
          <Link to="/login">ログインはこちらから</Link>
        </div>
        <Button type="primary" onClick={() => history.push('/copnfirmation')}>
          登録
        </Button>
      </div>
    </NewmemberWrapper>
  );
};

export default Newmember;
