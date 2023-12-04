import styled from 'styled-components';

const Wrapper = styled.section`
  margin: auto;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .transaction {
    width: 50vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (min-width: 1120px) {
    .transactiondata {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
