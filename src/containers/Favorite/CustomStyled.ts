import styled from 'styled-components';

export const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

    & > a{
      /* border: 1px solid #e4e4e4; */
      width: 100%;
      padding: 5px;
      color: #000;
    }
    /* & > a:nth-child(2) {
      color: #000;
    } */

    &-companies {
      margin-top: 20px;
      width: 100%;

      & > p {
        border: 1px solid #e4e4e4;
        padding: 10px;
        width: 100%;
      }
    }
  }
`;
