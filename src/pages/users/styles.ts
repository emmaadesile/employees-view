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

const Container = styled.section`
  width: max(75%, 700px);
  margin: 0 auto;
  padding: 2rem;
  overflow-x: scroll;

  a {
    text-decoration: none;
    color: #777;
  }
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
  transition: background-color 300ms ease-in;
  /* cursor: pointer; */

  a {
    color: inherit;
  }

  .email {
    flex-basis: 230px;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`;

export { Container, Title, TableRow, TableHead };
