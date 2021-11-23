import styled from 'styled-components';

const AuthSect = styled.section`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;

  & h1 {
    text-align: center;
    color: white;
  }
`;
export const Control = styled.div`
  margin-bottom: 0.5rem;

  & label {
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & input {
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
`;
export const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: #9f5ccc;
  border: 1px solid #9f5ccc;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;

  &:hover {
    background-color: #873abb;
    border-color: #873abb;
  }
`;
export const ToggleButton = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  color: #9f5ccc;
  border: none;
  padding: 0.15rem 1.5rem;

  &:hover {
    background-color: transparent;
    color: #ae82cc;
  }
`;
export default AuthSect;
