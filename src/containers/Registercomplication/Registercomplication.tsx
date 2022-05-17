import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { RegistercomplicationWrapper } from './CustomStyled';

const Registercomplication: React.FC = () => {
  return (
    <RegistercomplicationWrapper>
      <div>
        <p>Thank you for your registration. Registration has been completed.</p>
      </div>
      <Link to="/">
        <Button type="primary">Return to Home</Button>
      </Link>
    </RegistercomplicationWrapper>
  );
};

export default Registercomplication;
