import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './CustomStyled';
import { UserOutlined, CrownOutlined, ExportOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <HeaderWrapper offsetTop={0}>
      <div>
        <div className="header">
          <div className="header-left">
            <Link to={'/'}>My STO</Link>
          </div>
          <div className="header-right">
            <Link to="/login">
              <ExportOutlined style={{ fontSize: '28px' }} />
              <span>Login</span>
            </Link>
            <Link to="/favorite">
              <CrownOutlined style={{ fontSize: '28px' }} />
              <span>Favorite List</span>
            </Link>
            <Link to="/mypage">
              <UserOutlined style={{ fontSize: '28px' }} />
              <span>My page</span>
            </Link>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
