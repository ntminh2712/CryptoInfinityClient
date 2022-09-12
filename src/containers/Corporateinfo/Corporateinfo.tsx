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
            <p>住所</p>
            <p>新宿区新宿2-6-4 新宿通り東洋ビル10F 東京</p>
          </div>
          <div>
            <p>雇用形態</p>
            <p>契約社員</p>
          </div>

          <div>
            <p>事業内容・職務内容</p>
            <p>家電量販店でのスマートフォン・インターネットの販売 店。</p>
          </div>
          <div>
            <p>五日</p>
            <p>勤務週</p>
          </div>
          <div>
            <p>シフト制</p>
            <p>店舗シフトにより異なります。</p>
          </div>
          <div>
            <p>交通手段</p>
            <p>場所によって異なります</p>
          </div>
          <div>
            <p>場所【関東エリア】</p>
            <p>東京、神奈川、埼玉、千葉</p>
          </div>
        </div>
      </div>
    </CorporateinfoWrapper>
  );
};

export default Corporateinfo;
