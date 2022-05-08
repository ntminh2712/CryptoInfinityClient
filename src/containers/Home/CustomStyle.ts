import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;

  .home {
    width: 1200px;

    .home-pagination {
      margin: 12px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .home-markets {
      width: 100%;
      background-color: ${({theme}) => theme.colors.whiteColor};
      padding: 15px;
      border-radius: 15px;

      .home-markets-title {
        color: ${({theme}) => theme.colors.cyprus};
        font-size: 24px;
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 16px;
      }
    }
  }
`
