import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { FromcorporateinfoWrapper } from './CustomStyled';

const Fromcorporateinfo: React.FC = () => {
  return (
    <FromcorporateinfoWrapper>
      <div className="fromcorporateinfo-content">
        <h1>株式会社AAAA</h1>
        <div>
          <p>【エントリー受付完了のお知らせ】 株式会社AAAA/4月2日</p>
          <p>
            〇〇様、この度は弊社にエントリーしていただきありがとうご
            ざいます。つきましては…
          </p>
        </div>
        <Link to="/fromcorporate">戻る</Link>
      </div>
    </FromcorporateinfoWrapper>
  );
};

export default Fromcorporateinfo;
