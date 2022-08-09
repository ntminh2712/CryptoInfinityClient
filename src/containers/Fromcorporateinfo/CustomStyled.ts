import styled from 'styled-components';

export const FromcorporateinfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;
  gap: 20px;

  .fromcorporateinfo-content {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > h1 {
      font-size: 20px;
      font-weight: bold;
      text-align: start;
      width: 100%;
    }

    & > div {
      background-color: #0080D6;
      border: 1px solid #0035A0;
      padding: 10px;
    }

    & > a {
      margin-top: 10px;
      color: #000000;
      background-color: #0080D6;
      border: 1px solid #0035A0;
      padding: 5px;
    }
  }
`;
