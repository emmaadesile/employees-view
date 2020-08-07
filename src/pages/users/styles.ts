import styled, { css } from "styled-components";

const tableStyles = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
  padding: 0 1rem;

  & > * {
    flex-basis: 100px;
  }
`;

const Container = styled.div`
  width: max(75%, 700px);
  margin: 0 auto;
  padding: 2rem;
  overflow-x: scroll;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TableHead = styled.div`
  ${tableStyles};
  background: #f2f2f2;
  font-weight: bold;
  margin-top: 2rem;

  .emailHead {
    flex-basis: 230px;
  }
`;

const TableRow = styled.div`
  ${tableStyles};
  transition: background 300ms ease-in;

  cursor: pointer;

  .email {
    flex-basis: 230px;
  }

  &:hover {
    background: #f7f7f7;
  }
`;

export { Container, Title, TableRow, TableHead };
