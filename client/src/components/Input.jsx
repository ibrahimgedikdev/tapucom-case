import styled from "styled-components";

export const Input = styled.input`
  display: block;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid #bbc3cf;
  width: 100%;
  height: 45px;
  outline: none;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
