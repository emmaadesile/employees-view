import styled from "styled-components";

const Container = styled.section`
  width: max(75%, 700px);
  margin: 0 auto;
  padding: 2rem;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;

  .row {
    margin-left: 1rem;

    & > * {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .fullname {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    .gender {
      font-size: 0.9rem;
    }
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Info = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  background: #f2f2f2;
  border-radius: 10px;
  font-weight: 500;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 0.8rem;
    }
  }
`;

const Summary = styled.div`
  padding: 0.5rem 1rem;
  width: 500px;
  background: #f2f2f2;
  margin-top: 2rem;
  border-radius: 10px;

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .summary {
    color: #444;
  }
`;

export { Container, TopSection, Image, Info, Summary };
