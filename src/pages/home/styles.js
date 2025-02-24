import styled from 'styled-components';

export const HomeBox = styled.div `
    display: flex;
    max-width: 60%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #ccc;
  }
`;

export const PageIndicator = styled.span`
  margin: 0 10px;
  font-size: 16px;
  font-weight: 500;
`;
