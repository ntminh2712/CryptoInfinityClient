import React, { useState } from 'react';
import { Rate, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { CorporateinfoWrapper } from './CustomStyled';

const Corporateinfo: React.FC = () => {
  const [isFollow, setIsFollow] = useState<number>(0);
  const FollowIcon = isFollow === 1 ? HeartFilled : HeartOutlined;
  const onChange = (value: number) => {
    setIsFollow(value);
  };
  return (
    <CorporateinfoWrapper>
      <div className="corporateinfo-content">
        <div className="corporateinfo-content-top">
          <p>株式会社</p>
          <div className="corporateinfo-content-top-bookmark">
            <Rate
              character={<FollowIcon style={{ color: 'red' }} />}
              count={1}
              onChange={onChange}
            />
            <Link to="/favorite">お気に入り一覧へ</Link>
          </div>
        </div>
        <div className="corporateinfo-content-bottom">
          <div>
            <p>所在地</p>
            <p>東京都新宿区１丁目▼▼ビル３５階</p>
          </div>
          <div>
            <p>設立</p>
            <p>２０００年１１月</p>
          </div>
        </div>
      </div>
    </CorporateinfoWrapper>
  );
};

export default Corporateinfo;
