import styled from "styled-components";

export const PostDetailWrapper = styled.div`
  padding: 20px 0;
  background-color: ${({theme}) => theme.colors.grey2};

  .detail-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .detail-top-wrapper {
      width: 1200px;

      .detail-top-breadcrumb {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .detail-top-title {
        margin-bottom: 30px;

        span {
          font-size: 40px;
          line-height: 48px;
          font-weight: bold;
          color: ${({theme}) => theme.colors.cyprus};
          padding-bottom: 24px;
        }
      }

      .detail-top-author {
        display: flex;
        gap: 20px;
        margin-top: 30px;

        .detail-top-author-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .detail-top-author-desc {
          font-size: 16px;
          line-height: 24px;
          color: ${({theme}) => theme.colors.cyprus};

          span {
            font-weight: bold;
          }

          .detail-top-author-date {
            color: ${({theme}) => theme.colors.lynch};
            font-size: 14px;
          }
        }
      }
    }
  }

  .detail-mid {
    display: flex;
    align-items: center;
    justify-content: center;

    .detail-mid-wrapper {
      width: 1200px;
      height: 100%;
      margin-top: 30px;

      .detail-mid-share {
        border: 1px solid red;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .detail-mid-share-facebook {
          width: 32px;
          height: 32px;
        }
        .detail-mid-share-youtube {
          width: 32px;
          height: 32px;
        }
      }

      .detail-mid-metadata {
        border: 1px solid red;
        height: 100%;
      }

      .detail-mid-recommend {
        border: 1px solid red;
        height: 100%;

        & > p {
          font-weight: bold;
          font-size: 24px;
          line-height: 40px;
          color: ${({theme}) => theme.colors.cyprus};
        }
        }
      }
    }
  }
`
