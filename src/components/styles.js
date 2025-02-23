import styled from "styled-components";

export const AppCardBox = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  width: 150px;
  height: 150px;
  margin: 10px;

  div {
    width: 100px;
    height: 100px;
    margin: 0 auto; 
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 75px;
  }

  h3 {
    font-size: 16px;
    color: #333;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;