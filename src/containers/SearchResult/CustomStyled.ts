import styled from 'styled-components';

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;
  gap: 20px;

  .searchResult-content {
    width: 500px;

    &-head {
      background: #0404bf;
      padding: 14px 0;
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
      & > .searchResult-amount {
        background-color: #fff;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > p {
          margin: 0;
        }
      }
    }
    &>div:nth-child(2){
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      background-color: #e4e4e4;

      & > p {
        margin: 0;
      }
    }

    & > div.searchResult-item {
      margin-top: 10px;
      display: flex;
      align-items: center;
      width: 100%;
      gap: 10px;
      cursor: pointer;
      & > div:first-child {
        width: 200px;
        height: 100px;

        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
