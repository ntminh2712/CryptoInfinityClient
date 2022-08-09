import styled from "styled-components";

export const ForgetPasswordWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;

  .forgetPassword-content {
    width: 500px;

    & > h1 {
      font-size: 16px;
      text-align: center;
      margin-bottom: 50px;
    }

    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

`
