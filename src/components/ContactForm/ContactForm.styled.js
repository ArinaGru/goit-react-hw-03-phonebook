import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35;
  color: #010101;
  border: 1px solid #0b0b45;
  border-radius: 5px;
  box-shadow: 2px 8px 11px -2px rgba(11, 11, 69, 0.75);
  padding: 35px;
  gap: 25px;
  margin: 20px 0;
`;

export const MyInput = styled(Field)`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #0b0b45;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  padding: 20px 15px;
  background-color: blue;
  color: white;
  opacity: 0.6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    opacity: 1;
  }
`;
