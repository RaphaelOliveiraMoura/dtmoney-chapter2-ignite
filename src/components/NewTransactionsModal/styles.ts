import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    transition: filter 0.5;

    &::placeholder {
      color: var(--text-body);
    }

    &:hover {
      filter: brightness(0.9);
      border: 2px solid #32ccc0;
    }

    &::selection {
      color: #32cc;
      font-weight: 600;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 5px;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.5;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
      border: 2px solid #32ccc0;
    }
  }
`;

export const TransactionsTypeContainer = styled.div`
  button[type="button"] {
    background: transparent;
    border: 0;
  }
`;
