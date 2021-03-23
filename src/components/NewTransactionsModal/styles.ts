import styled from "styled-components";
import { darken, transparentize } from "polished";
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
    transition: filter 0.5s;

    &:focus {
      border: 1px solid red;
    }

    &::placeholder {
      color: var(--text-body);
    }

    &:hover {
      filter: brightness(0.9);
      border: 2px solid #32ccc0;
    }

    &:active {
      background-color: #c2c2c2c0;
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
    transition: filter 0.5s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.8);
      border: 2px solid #32ccc0;
    }
  }
`;

export const TransactionsTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e40",
};

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.85, colors[props.activeColor])
      : "transparent"};
  border: ${(props) =>
    props.isActive ? "2px solid #32ccc0" : "1px solid #d7d7d7"};
  height: 4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  transition: filter 0.6s;

  &:hover {
    filter: brightness(0.8);
    border: 2px solid #32ccc0;
    border-color: ${darken(0.1, "#32ccc0")};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
