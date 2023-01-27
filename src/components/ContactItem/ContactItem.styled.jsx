import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline;
  margin-left: 10px;
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  transition: all 250ms ease-out;

  :hover,
  :focus {
    outline: 1px solid #2a2a2a;
    cursor: pointer;
    background-color: #bbceeb;
  }
`;
