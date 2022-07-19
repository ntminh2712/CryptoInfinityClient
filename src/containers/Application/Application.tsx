import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { ApplicationWrapper } from './CustomStyled';

const Application: React.FC = () => {
  return (
    <ApplicationWrapper>
      <div className="application-content">
        <h1>応募した企業 〇件</h1>
        <table>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社AAAA</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">応募日3月5日</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社BBBBB</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">応募日3月18日</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社CCCC</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">応募日4月2日</Link>
            </td>
          </tr>
        </table>
      </div>
    </ApplicationWrapper>
  );
};

export default Application;
