import React from 'react';
import { useHistory } from 'react-router';
import { CopnfirmationWrapper } from './CustomStyled';

const Registercomplication: React.FC = () => {
  const history = useHistory();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/finish');
    }, 2000);
    return clearTimeout(timeout);
  }, []);
  return (
    <CopnfirmationWrapper>
      <div>
        <p>
          ご入力いただいたアドレスにメールを送信いた
          しました。そちらから本登録をおこなってくだ さい。
        </p>
      </div>
    </CopnfirmationWrapper>
  );
};

export default Registercomplication;
