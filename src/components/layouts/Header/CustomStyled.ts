import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  //height: 130px;
  //background-color: red;

  .header-top {
    width: 100%;
    height: 25px;
    background-color: ${({theme}) => (theme.colors.navDarkBg)};
  }

  nav {
    height: 118px;
    background-color: ${({theme}) => (theme.colors.whiteColor)};
    display: flex;
    align-items: center;
    justify-content: center;

    div.nav-wrapper {
      width: 1200px;
      height: 76px;

      .nav-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        .nav-top-logo {
          display: block;
        }

        .nav-top-user {

        }
      }

      .nav-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav-content-list-items {
          height: 40px;
          width: 836px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          .nav-content-item {
            position: relative;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
          }
          .nav-content-item:hover .nav-content-item-before:before {
            display: block;
          }
          .nav-content-item-before {
            &:before {
              display: none;
              position: absolute;
              content: "";
              width: 125%;
              height: 40px;
              background-color: ${({theme})=> theme.colors.magicMint};
              opacity: 0.5;
              top: -60%;
              border-radius: 20px;
              left: -15%;
            }
          }
        }

        .nav-content-search {
          width: 250px;
          height: 40px;
        }
      }
    }
  }
`
