import React from 'react';
import {ContactWrapper, FormWrapper} from './CustomStyled';
import {Row, Col, Form, Input , Button} from 'antd';

const Contact: React.FC = () => {

  return (
    <ContactWrapper>
      <div className="contact-content">
        <Row>
          <Col span={12}>
            <div className="contact-content-left">
              <h2>Be the first to know <br/>
                about crypto news every day</h2>
              <p>Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single
                newsletter.</p>
              <FormWrapper>
                <FormWrapper.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="Enter your Address"/>
                </FormWrapper.Item>
                <FormWrapper.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Subscribe Now
                  </Button>
                </FormWrapper.Item>
              </FormWrapper>
            </div>
          </Col>
          <Col span={12}>
            <div className="contact-img-block">
              <img src="https://www.coinnerd.com/wp-content/themes/coinnerd/assets/images/picture/newletter.png"
                   alt="#"/>
            </div>
          </Col>
        </Row>
      </div>
    </ContactWrapper>
  )
}

export default Contact;
