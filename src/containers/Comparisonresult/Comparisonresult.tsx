import React, { useState } from 'react';
import { Button, Input, AutoComplete, Table } from 'antd';
import { Link } from 'react-router-dom';
import { ComparisonresultWrapper } from './CustomStyled';

const Comparisonresult: React.FC = () => {
  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     width: 150,
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     width: 150,
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //   },
  // ];

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  // ];
  return (
    <ComparisonresultWrapper>
      <div className="comparisonresult-content">
        <div>
          <p>会社</p>
          <p>(株)ZXW</p>
          <p>(株)VWX</p>
        </div>
        <table>
          <tr>
            <td>給 与</td>
            <td>月20万~30万</td>
          </tr>
          <tr>
            <td>賞 与</td>
            <td>年２回</td>
          </tr>
          <tr>
            <td>賞 級</td>
            <td>年一回</td>
          </tr>
          <tr>
            <td>手 当</td>
            <td>家族手当</td>
          </tr>
          <tr>
            <td>福利厚生</td>
            <td>社会保険完備</td>
          </tr>
          <tr>
            <td>平均年齢</td>
            <td>45歳</td>
          </tr>
          <tr>
            <td>育児休業者数(男性)</td>
            <td>3人</td>
          </tr>
          <tr>
            <td>育児休業者数(女性)</td>
            <td>5人</td>
          </tr>
        </table>
        {/* <Table columns={columns} dataSource={data} pagination={false}/> */}
      </div>
    </ComparisonresultWrapper>
  );
};

export default Comparisonresult;
