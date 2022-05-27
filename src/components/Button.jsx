import styled, { css } from "styled-components";

export const Button = styled.button`
  display: block;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid transparent;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  text-align: center;
  width:100%;
  ${(props) =>
    props.primary &&
    css`
      background: #bbc3cf;
      color: #fff;
      &:hover {
        background: #4d4d4d;
      }
    `};
  ${(props) =>
    props.secondary &&
    css`
        background: #E82223;
        color: #fff;
        border:1px solid transparent
        &:hover {
            background: crimson;
        }
    `};
  ${(props) =>
    props.tertiary &&
    css`
      background: transparent;
      color: #e82223;
      border: 1px solid #e82223;
      &:hover {
        background: crimson;
        color: #fff;
      }
    `};
`;
