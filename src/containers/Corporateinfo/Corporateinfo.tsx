import { getCurrentItem, getItem } from '@/redux/slice';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CorporateinfoWrapper } from './CustomStyled';

const Corporateinfo: React.FC = () => {
  const [isFollow, setIsFollow] = useState<number>(0);
  const data: any = useSelector(state => state);
  const dispatch = useDispatch();

  const FollowIcon = isFollow === 1 ? HeartFilled : HeartOutlined;
  const onChange = (value: number) => {
    setIsFollow(value);
  };

  useEffect(() => {
    if (!data.app[0]) dispatch(getItem(0));
    dispatch(getCurrentItem());
  }, []);

  return (
    <CorporateinfoWrapper>
      <div className="corporateinfo-content">
        <div className="corporateinfo-content-top">
          <p>{data && data.app[0] && data.app[0].name}</p>
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
            <p>{data && data.app[0] && data.app[0].location}</p>
          </div>
          <div>
            <p>雇用形態</p>
            <p>{data && data.app[0] && data.app[0].employmentStatus}</p>
          </div>

          <div>
            <p>事業内容・職務内容</p>
            <p>{data && data.app[0] && data.app[0].BusinessAndDuties}</p>
          </div>
          <div>
            <p>働き方</p>
            <p>{data && data.app[0] && data.app[0].wayOfWorking}</p>
          </div>
          <div>
            <p>給料</p>
            <p>{data && data.app[0] && data.app[0].salaryL}</p>
          </div>
          <div>
            <p>勤務地</p>
            <p>{data && data.app[0] && data.app[0].dutyStation}</p>
          </div>
        </div>
      </div>
    </CorporateinfoWrapper>
  );
};

export default Corporateinfo;
