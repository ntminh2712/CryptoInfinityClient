import styled from 'styled-components';

export const ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  gap: 20px;

  .application-content {
    width: 500px;

    & > h1 {
      font-size: 20px;
      font-weight: bold;
    }

    & > table {
      width: 100%;

      & > tr {
        border: 1px solid #000;
        background-color: #fff;
        margin-bottom: 10px;
        padding: 10px;
        cursor: pointer;
        & > td {
          padding: 10px;
          & > a {
            color: #000;
          }
        }
      }
    }
  }
`;
