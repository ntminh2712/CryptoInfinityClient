import React, { useState } from 'react';
import { Button, Input, AutoComplete, Form } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SearchResultWrapper } from './CustomStyled';
<<<<<<< Updated upstream
import { SearchOutlined } from '@ant-design/icons';
=======

const fakeDataItem1 = [
  {
    id: 0,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
  {
    id: 1,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
  {
    id: 2,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
];
const fakeDataItem2 = [
  {
    id: 3,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
  {
    id: 4,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
  {
    id: 5,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
];
const fakeDataItem3 = [
  {
    id: 6,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
  {
    id: 7,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
  {
    id: 8,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
];
>>>>>>> Stashed changes

const SearchResult: React.FC = () => {
  const history = useHistory();
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
          <h1>Search</h1>
          {/* <Input placeholder="Search" onChange={() => {}} /> */}
          <Form
            name="form-search"
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="search">
              <Input placeholder="Search" onChange={() => {}} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
          <div className="searchResult-amount">
            <p>123 result</p>
            <p>検索結果3件</p>
          </div>
        </div>
        <div>
          <p>新着順</p>
          <p>締切間近順</p>
          <p>おすすめ順</p>
        </div>
        <div className="searchResult-content-list-item">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="searchResult-item"
                onClick={() => {
                  history.push('/corporateinfo');
                  dispatch(getItem(item.id));
                }}
              >
                <div>
                  <img src={item.image} alt="#" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>勤務地</p>
                  <p>{item.dutyStation}</p>
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
