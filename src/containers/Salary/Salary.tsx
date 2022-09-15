import React, { useState } from 'react';
import { Input, AutoComplete, Checkbox, Form, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SalaryWrapper } from './CustomStyled';
import { SearchOutlined } from '@ant-design/icons';

const Search: React.FC = () => {
  const history = useHistory();

  const [options, setOptions] = useState<any>([]);

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['指定しない', 'メーカー', '商社', '流通・小売り'];
  const handleSearch = () => {};
  const handleEnter = () => {
    history.push('/search-result');
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/search-result');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <SalaryWrapper>
      <div className="salary-content">
        <div className="salary-content-head">
          <h1>検索</h1>
          {/* <Input
            placeholder="Search"
            onChange={handleSearch}
            onPressEnter={handleEnter}
          /> */}
          <Form
            name="form-salary"
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="salary">
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
          <Link to="/search-result">業界</Link>
          {/* <Link to="/search-result">地域</Link>
          <Link to="/search-result">職種</Link>
          <Link to="/search-result">制度や特徴</Link>
          <Link to="/search-result">使用状況</Link> */}
        </div>
        <div className="salary-content-checkboxs">
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
        </div>
      </div>
    </SalaryWrapper>
  );
};

export default Search;
