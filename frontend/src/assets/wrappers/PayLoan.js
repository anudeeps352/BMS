import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .transactiondata {
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
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 0;
    box-shadow: none;
    padding: 1rem;
    max-width: 100%;
    width: 50vw;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    width: 50vw;
  }
  .accountsection {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  .type-btn {
    margin-top: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    background-color: #637e76;
    border-radius: 4px;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    max-width: 100px;
    min-height: 44px;
    min-width: 100px;
    outline: none;
    overflow: hidden;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
  }

  .type-btn:hover,
  .type-btn:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #00ffff;
    transform: translateY(-0.25em);
  }
  .type-btn:active {
    box-shadow: 0 0.5em 0.5em -0.4em #00ffff;
    transform: translateY(-0.25em);
  }
  .pressed: {
    box-shadow: 0 0.5em 0.5em -0.4em #00ffff;
    transform: translateY(-0.25em);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Wrapper;
