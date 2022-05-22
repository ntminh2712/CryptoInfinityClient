import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .home-content {
    width: 500px;

    .home-content-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home-content-top-left {
      }
      .home-content-top-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
