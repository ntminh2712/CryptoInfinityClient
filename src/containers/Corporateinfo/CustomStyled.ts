import styled from 'styled-components';

export const CorporateinfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .corporateinfo-content {
    width: 500px;

    .corporateinfo-content-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      p {
        margin: 0;
        font-weight: bold;
        font-size: 20px;
      }
      .corporateinfo-content-top-bookmark {
        display: flex;
        align-items: center;
        gap: 10px;

        & > a {
          border: 1px solid red;
          padding: 5px;
        }
      }
    }

    .corporateinfo-content-bottom {

      & > div {

        p:first-child {
          font-size: 14px;
          padding: 5px;
          font-weight: bold;
          background-color: #CFE7F7;
        }
      }
    }
  }
`;
