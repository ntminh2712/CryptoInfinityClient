import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { RegistercomplicationWrapper } from './CustomStyled';

const Registercomplication: React.FC = () => {
  return (
    <RegistercomplicationWrapper>
      <div>
        <p>再登録が完了いたしました</p>
      </div>
      <Link to="/">
        <Button type="primary">TOPへ戻る</Button>
      </Link>
    </RegistercomplicationWrapper>
  );
};

export default Registercomplication;
