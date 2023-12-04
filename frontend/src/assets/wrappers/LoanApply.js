import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0px;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    margin-bottom: 2rem;
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

  .btn {
    margin-top: 20px;
    margin-right: 20px;
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
