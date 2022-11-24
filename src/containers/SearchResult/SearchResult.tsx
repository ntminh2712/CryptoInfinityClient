import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SearchResultWrapper } from './CustomStyled';

const fakeDataItem = [
  {
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
  {
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
  {
    name: '新宿区名古屋市北区金田町4-721-1',
    location: '勤 務 地一都三県（東京都・埼玉県・千葉県・神奈川 県）',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
];

const SearchResult: React.FC = () => {
  const [data, setData] = React.useState(fakeDataItem);
  const history = useHistory();

  const handleSort = () => {
    setData(prev => {
      let temp = [...prev].sort(() => 0.5 - Math.random());
      while (temp[0].name === prev[0].name) {
        temp = [...prev].sort(() => 0.5 - Math.random());
      }
      return temp;
    });
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <SearchResultWrapper>
      <div className="searchResult-content">
        <div className="searchResult-content-head">
          <h1>検索</h1>
          {/* <Input placeholder="Search" onChange={() => {}} /> */}
          <Form
            name="form-search"
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="search">
              <Input placeholder="探す" onChange={() => {}} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
          <div className="searchResult-amount">
            <p>検索結果123件</p>
          </div>
        </div>
        <div className="searchResult-content-filter">
          <p onClick={handleSort}>新着順</p>
          <p onClick={handleSort}>締切間近順</p>
          <p onClick={handleSort}>おすすめ順</p>
        </div>
        <div className="searchResult-content-list-item">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="searchResult-item"
                onClick={() => history.push('/corporateinfo')}
              >
                <div>
                  <img src={item.image} alt="#" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SearchResultWrapper>
  );
};

export default SearchResult;
