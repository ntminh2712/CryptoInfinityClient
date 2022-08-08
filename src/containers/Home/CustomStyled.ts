import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 30px;

  .home-content {
    width: 1140px;
    height: 100%;
    .home-content-top {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 50px;
      /* justify-content: space-between; */
      .home-content-top-left {
      }
      .home-content-top-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .home-content-bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .home-content-bottom-top {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 50px;

        & > a {
          padding: 5px 10px;
          border-radius: 8px;
          display: block;
          background-color: #f7941d;

          & > span {
            color: #fff;
          }
        }
      }

      .home-content-bottom-favorite {
      }
    }
  }
`;

export const FavoriteItem = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  /* height: 80px; */
  background-color: #d5e2f7;
  padding: 5px 10px;
  border-radius: 5px;

  & > div {
    /* background-color: red; */
    background-color: #f5f5f5;
    padding: 10px 10px;

    & > p {
      margin: 0;
    }
  }

  & > div:first-child {
    flex: 1;
  }
  & > div:nth-child(2) {
    flex: 1;
    & > p {
      text-align: center;
      border: 1px solid #000;
    }
    & > p:first-child {
      background-color: #3b7ea3;
      color: #fff;
    }
    & > p:last-child {
    }
  }
  & > div:last-child {
    flex: 3;
  }
`;
