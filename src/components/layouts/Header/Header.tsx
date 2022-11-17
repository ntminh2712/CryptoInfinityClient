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
            <Link to={'/'}>MYSTO</Link>
          </div>
          <div className="header-right">
            <Link to="/login">
              <ExportOutlined style={{ fontSize: '28px' }} />
              <span>ログイン</span>
            </Link>
            <Link to="/favorite">
              <CrownOutlined style={{ fontSize: '28px' }} />
              <span>お気に入りリスト</span>
            </Link>
            <Link to="/mypage">
              <UserOutlined style={{ fontSize: '28px' }} />
              <span>マイページ</span>
            </Link>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
