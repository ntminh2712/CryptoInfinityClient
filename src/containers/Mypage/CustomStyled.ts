import styled from 'styled-components';

export const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;
  gap: 20px;

  .mypage-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h1 {
      font-size: 20px;
      font-weight: bold;
    }

    & > div {
      border: 1px solid #000;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      background-color: #00DBCC;

      & > a {
        background-color: #fff;
        width: 100%;
        color: #000;
        padding: 5px;
      }
    }
  }
`;
