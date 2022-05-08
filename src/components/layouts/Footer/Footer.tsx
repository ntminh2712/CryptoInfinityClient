import React from "react";
import {Divider, Row, Col} from "antd";
import {FooterWrapper} from "./CustomStyled";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="footer-content-top">
          <Row>
            <Col span={8}>
              <div className="footer-content-top-left">
                <div className="footer-content-logo">
                  <img src="https://www.coinnerd.com/wp-content/uploads/2021/12/logo-footer.svg" alt="logo"/>
                </div>
              </div>
            </Col>
            <Col span={16}>
              <div className="footer-content-top-right">
                <div className="footer-content-menu">
                  <div className="footer-content-menu-column menu-company">
                    <p className="menu-company-label">Company</p>
                    <ul className="menu-company-list">
                      <li>Contact</li>
                      <li>Careers</li>
                      <li>Jobs Board</li>
                    </ul>
                  </div>
                  <div className="footer-content-menu-column menu-services">
                    <p className="menu-services-label">Services</p>
                    <ul className="menu-services-list">
                      <li>News</li>
                      <li>Coupon</li>
                      <li>Cryptocurrencies</li>
                      <li>Convert Tools</li>
                      <li>Venture</li>
                    </ul>
                  </div>
                  <div className="footer-content-menu-column menu-support">
                    <p className="menu-support-label">Support</p>
                    <ul className="menu-support-list">
                      <li>Request Form</li>
                      <li>Contact Support</li>
                      <li>FAQ</li>
                      <li>Glossary</li>
                    </ul>
                  </div>
                  <div className="footer-content-menu-column menu-legal">
                    <p className="menu-legal-label">Legal</p>
                    <ul className="menu-legal-list">
                      <li>Privacy Policy</li>
                      <li>Terms & Conditions</li>
                      <li>Return Policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Divider/>
        <div className="footer-content-bottom">
          <p className="copyright">Copyright 2010 - 2021 by Coinnerd. All rights Reserved</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;
