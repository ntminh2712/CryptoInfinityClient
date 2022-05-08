import React from 'react';
import {Link} from "react-router-dom";
import {PostWrapper} from "./CustomStyled";

const Post: React.FC<{size: string, description ?: boolean}> = ({size= "mid",description=true}) => {

  return (
    <PostWrapper size={size} description={description}>
      <Link to={`/detail`} className="post-thumb">
        <img src="https://www.coinnerd.com/wp-content/uploads/2022/04/ft.png" alt="#"/>
      </Link>
      <div className="post-content">
        <div className="post-name">
          <Link to={`/detail`}>What is Thundercore? – Is this cryptocurrency project worth the investment</Link>
        </div>
        <div className="post-description">
          <p>The biggest goal for new blockchains these days is to achieve four key metrics. This includes faster
            speeds, lower gas fees, scalability, and more importantly, cross-chain interoperability. These attributes
            are often designed to address the…</p>
        </div>
        <div className="post-date">
          <p>April 05, 2022 | 03:04 pm</p>
        </div>
      </div>
    </PostWrapper>
  )
}

export default Post;
