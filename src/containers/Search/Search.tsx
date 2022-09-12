import React, { useState } from 'react';
import { Button, Input, AutoComplete, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { SearchWrapper } from './CustomStyled';

const Search: React.FC = () => {
  const history = useHistory();
  const handleSearch = () => {};
  const handleEnter = () => {
    // history.push('/search-result');
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <SearchWrapper>
      <div className="search-content">
        <div className="search-content-head">
          <h1>検索</h1>
          <Form
            name="form-search"
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="search">
              <Input
                placeholder="Search"
                onChange={handleSearch}
                onPressEnter={handleEnter}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Link to="/salary">業界</Link>
          <Link to="/salary">地域</Link>
          <Link to="/salary">職種</Link>
          <Link to="/salary">制度や特徴</Link>
          <Link to="/salary">使用状況</Link>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
