import styled from 'styled-components';

export const SalaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .salary-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-head {
      width: 100%;
      background: #0404bf;
      padding: 14px 0;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      & > h1 {
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        color: #fff;
        margin: 0;
      }
      & > input {
        width: 50%;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      & > a {
        display: block;
        color: #000;
        border-bottom: 1px solid #000;
        padding-left: 10px;
        margin-top: 10px;
      }
    }

    .salary-content-checkboxs {
      width: 100%;
      margin-top: 20px;
      .ant-checkbox-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
