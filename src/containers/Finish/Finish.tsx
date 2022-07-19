import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FinishWrapper } from './CustomStyled';

const Finish: React.FC = () => {
  return (
    <FinishWrapper>
      <div>
        <p>ご登録ありがとうございます。 本登録が完了いたしました。</p>
      </div>
      <Link to="/">
        <Button type="primary">TOPへ戻る</Button>
      </Link>
    </FinishWrapper>
  );
};

export default Finish;
