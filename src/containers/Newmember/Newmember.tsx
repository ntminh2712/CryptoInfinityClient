import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { NewmemberWrapper } from './CustomStyled';

const Newmember: React.FC = () => {
  return (
    <NewmemberWrapper>
      <h1>New member registration</h1>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <Button type="primary">Register</Button>
    </NewmemberWrapper>
  );
};

export default Newmember;
