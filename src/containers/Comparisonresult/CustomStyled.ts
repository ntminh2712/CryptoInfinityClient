import styled from 'styled-components';

export const ComparisonresultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: 30px;
  gap: 20px;

  .comparisonresult-content {
    width: 500px;
    border: 1px solid #000;
    padding: 10px;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #000;
    }

    & > table {
      margin-top: 10px;
      width: 100%;
    }
  }
`;
