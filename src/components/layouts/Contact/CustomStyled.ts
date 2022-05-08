import styled from 'styled-components';
import {Form} from 'antd';

export const ContactWrapper = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .contact-content {
    width: 1200px;
    height: 331px;

    .contact-content-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .contact-img-block {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`

export const FormWrapper = styled(Form)`
  display: flex;

  .ant-col.ant-form-item-label {
    display: none;
  }
  .ant-col-offset-8 {
   margin-left: 0;
  }
  .ant-btn.ant-btn-primary {
    width: 168px;
    height: 48px;
    border-radius: 64px;
    left: -22px;
    font-weight: 600;
    font-size: 14px;
    color: ${({theme})=> theme.colors.cyprus};
  }
  .ant-input {
    width: 280px;
    height: 48px;
  }
`
