import styled from "styled-components";

export const FooterWrapper = styled.footer`

  width: 100%;
  max-width: 100%;
  height: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.cyprus};

  .footer-content{
    width: 1200px;
    height: 280px;
  }

  .footer-content-top {

    .footer-content-top-left {

    }

    .footer-content-top-right {
      .footer-content-menu {
        height: 220px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .footer-content-menu-column {
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;

          p:first-child {
            font-weight: bold;
            font-size: 16px;
            line-height: 36px;
            color: ${({theme})=> theme.colors.whiteColor};
            margin: 0;
          }
          ul {
            list-style-type: none;
            padding: 0;

            li {
              margin: 12px 0px;
              color: ${({theme})=> theme.colors.lynch};
            }
          }
        }
      }
    }

  }

  .footer-content-bottom {
    padding-top: 38px;
    p.copyright {
      color: ${({theme})=> theme.colors.lynch};
      font-size: 14px;
    }
  }
`
