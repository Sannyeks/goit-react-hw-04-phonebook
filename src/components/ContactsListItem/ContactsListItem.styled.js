import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  margin: 0.5em 1em;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1em 1.5em;
  cursor: pointer;
  text-transform: capitalize;
`;

export const ContactName = styled.p`
  color: #160b0f;
  font-size: 16px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
