import { Affix } from 'antd';
import styled from 'styled-components';

export const HeaderWrapper = styled(Affix)`
  width: 100%;
  height: 70px;

  & > div:last-child {
    border-bottom: solid 1px #418ce1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1140px;
      height: 100%;
      margin: auto;
      .header-left {
        & > a {
          color: #418ce1;
          font-size: 20px;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 30px;
        & > a {
          color: #418ce1;
          display: flex;
          flex-direction: column;

          & > span {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
