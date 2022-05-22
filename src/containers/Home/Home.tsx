import React from "react";
import {Button,Divider} from 'antd';
import {Link} from "react-router-dom";
import {HomeWrapper} from "./CustomStyled";

const ForgetPassword : React.FC = () => {

  return (
    <HomeWrapper>
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <Button type="primary">Top</Button>
          </div>
          <div className="home-content-top-right">
            <Link to="/login">Login</Link>
            <Link to="/">Bookmark List</Link>
            <Link to="/">My page</Link>
            <Link to="/">Annual income simulation</Link>
          </div>
        </div>
        <Divider/>
      </div>
    </HomeWrapper>
  )
}

export default ForgetPassword;

