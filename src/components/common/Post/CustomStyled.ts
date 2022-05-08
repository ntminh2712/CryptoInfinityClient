import styled from "styled-components";

export const PostWrapper = styled.div<{
  size?: string,
  description ?: boolean;
}>`

  width: 100%;

  .post-thumb {
    width: 100%;
    display: block;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .post-content {
    .post-name {
      margin-bottom: 8px;

      a {
        display: block;
        width: 100%;
        line-height: ${({description}) => description === false ? "initial" : "36px"};
        color: ${({theme,description}) => description === false ? theme.colors.cyprus : theme.colors.puertoRico};
        font-weight: 700;
        font-size: ${({size}) => size === "large" ? "28px" : "18px"};
      }
    }

    .post-description {
      ${({description}) => description === false && `
        display: none;
      `};
      p {
        color: ${({theme}) => theme.colors.cinder};
        line-height: 24px;
        margin: 0;
      }
    }

    .post-date {
      p {
        color: ${({theme}) => theme.colors.lynch};
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`
