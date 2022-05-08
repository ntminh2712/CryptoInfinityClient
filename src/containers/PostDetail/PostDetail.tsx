import React, {useEffect} from "react";
import {Breadcrumb, Divider,Row,Col} from "antd";
import {PostDetailWrapper} from "./CustomStyled";
import {FacebookOutlined,YoutubeOutlined} from "@ant-design/icons";
import Post from "@/components/common/Post";
import {Link} from "react-router-dom";

const PostDetail: React.FC = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])

  return (
    <PostDetailWrapper>
      <div className="detail-top">
        <div className="detail-top-wrapper">
          <div className="detail-top-breadcrumb">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Post Detail</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="detail-top-title">
            <span>The NFT effect on the Music Industry</span>
          </div>
          <Divider/>
          <div className="detail-top-author">
            <div className="detail-top-author-img">
              <img src="https://www.coinnerd.com/wp-content/uploads/2022/01/Screenshot_20220104-111655-Tabitha-Nyambura-100x100.png" alt="" />
            </div>
            <p className="detail-top-author-desc">
              By <span>Tabitha Nyamburah</span>
            </p>
            <p className="detail-top-author-date">
              March 30, 2022 | 12:03 am
            </p>
          </div>
        </div>
      </div>
      <div className="detail-mid">
        <div className="detail-mid-wrapper">
          <Row gutter={20}>
            <Col span={2}>
              <div className="detail-mid-share">
                <div className="detail-mid-share-facebook">
                  <FacebookOutlined style={{fontSize: "32px"}}/>
                </div>
                <div className="detail-mid-share-youtube">
                  <YoutubeOutlined style={{fontSize: "32px"}}/>
                </div>
              </div>
            </Col>
            <Col span={16}>
              <div className="detail-mid-metadata">

              </div>
            </Col>
            <Col span={6}>
              <div className="detail-mid-recommend">
                <p>Recommend</p>
                <Post size="mid" description={false}/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="detail-bottom">

      </div>
    </PostDetailWrapper>
  )
}

export default PostDetail;
