import styled from 'styled-components';

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  padding: 10px 10px;
  margin-left: 15px;
  background-color: #bf0000;
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

export const Item = styled.li`
display: flex;
justify-content: space-between;
alignItems: center;
`