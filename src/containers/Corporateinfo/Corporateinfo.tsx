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
            <p>Address</p>
            <p>
              Shinjuku Dori Toyo Building 10F, 2-6-4 Shinjuku, Shinjuku-ku,
              Tokyo
            </p>
          </div>
          <div>
            <p>Employment Type</p>
            <p>Contract employee</p>
          </div>

          <div>
            <p>Business description/job description</p>
            <p>
              Sales of smart phones and internet at home electronics retail
              stores.
            </p>
          </div>
          <div>
            <p>Five-day</p>
            <p>work week</p>
          </div>
          <div>
            <p>Shift system</p>
            <p>Varies depending on store shift.e</p>
          </div>
          <div>
            <p>Transportation</p>
            <p>Varies depending on the location</p>
          </div>
          <div>
            <p>Location [Kanto area]</p>
            <p>Tokyo, Kanagawa, Saitama, Chiba</p>
          </div>
        </div>
      </div>
    </CorporateinfoWrapper>
  );
};

export default Corporateinfo;
