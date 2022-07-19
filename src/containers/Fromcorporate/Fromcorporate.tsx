import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FromcorporateWrapper } from './CustomStyled';

const Fromcorporate: React.FC = () => {
  return (
    <FromcorporateWrapper>
      <div className="fromcorporate-content">
        <h1>未既読のメール 〇件</h1>
        <table>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社AAAA</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">エントリー受付完了のお知らせ</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社BBBBB</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">エントリー締め切り間近です</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/fromcorporateinfo">株式会社CCCC</Link>
            </td>
            <td>
              <Link to="/fromcorporateinfo">インターン応募ありがとうござ…</Link>
            </td>
          </tr>
        </table>
      </div>
    </FromcorporateWrapper>
  );
};

export default Fromcorporate;
