import React from "react";
import Post from "@/components/common/Post";
import {HomeWrapper} from "./CustomStyle";
import {Row, Col, Table, Pagination} from "antd";

const Home: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '24h Change',
      dataIndex: 'changeDay',
      key: 'changeDay',
    },
    {
      title: '7 days change',
      key: 'changeWeek',
      dataIndex: 'changeWeek',
      // render: (tags: any) => (
      //   <>
      //     {tags.map((tag:any) => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <div>
      //           {tag.toUpperCase()}
      //         </div>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: 'Markets',
      key: 'markets',
      dataIndex: 'markets'
      // render: (text:any, record:any) => (
      //   <div>
      //     <a>Invite {record.name}</a>
      //     <a>Delete</a>
      //   </div>
      // ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      price: 100,
      changeDay: 32,
      changeWeek: 'New York No. 1 Lake Park',
      markets: 'markets',
    },
    {
      key: '1',
      name: 'John Brown',
      price: 100,
      changeDay: 32,
      changeWeek: 'New York No. 1 Lake Park',
      markets: 'markets',
    },
    {
      key: '1',
      name: 'John Brown',
      price: 100,
      changeDay: 32,
      changeWeek: 'New York No. 1 Lake Park',
      markets: 'markets',
    },
  ];
  return (
    <HomeWrapper>
      <div className="home">
        <Row gutter={30}>
          <Col span={16}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
          <Col span={8}>
            <Post size="large"/>
          </Col>
        </Row>
        <div className="home-pagination">
          <Pagination defaultCurrent={1} total={50}/>
        </div>
        <div className="home-markets">
          <p className="home-markets-title">Markets today</p>
          <div className="home-markets-table">
            <Table columns={columns} dataSource={data} pagination={false}/>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
