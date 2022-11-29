import styled from 'styled-components';

export const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;
  gap: 20px;

  .favorite-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;

    & > p {
      border: 1px solid #e4e4e4;
      padding: 10px;
      width: 100%;
      font-weight: bold;
    }

    & > p.favorite-content-title {
      border: none;
      font-size: 20px;
      padding: 0;
      margin: 0;
    }

    & > a {
      /* border: 1px solid #e4e4e4; */
      width: 100%;
      padding: 5px;
      color: #000;
      text-decoration: underline;
    }
    /* & > a:nth-child(2) {
      color: #000;
    } */

    &-companies {
      /* margin-top: 20px; */
      width: 100%;

      & > p {
        border: 1px solid #e4e4e4;
        padding: 10px;
        width: 100%;
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
  }
`;
