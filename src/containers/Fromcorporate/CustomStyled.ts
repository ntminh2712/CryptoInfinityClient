import styled from 'styled-components';

export const FromcorporateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .fromcorporate-content {
    width: 500px;

    & > h1 {
      font-size: 20px;
      font-weight: bold;
    }

    & > table {
      width: 100%;

      & > tr {
        border: 1px solid #000;
        background-color: #0080d6;
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

      & > tr:nth-child(even) {
        background-color: #fff;
      }
    }
  }
`;
