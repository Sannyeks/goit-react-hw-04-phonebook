import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: #160b0f;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 10px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #0a0a23;
  color: #160b0f;
`;
export const Button = styled.button`
  margin: 0.5em 1em;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1em 1.5em;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
