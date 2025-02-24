import styled from "styled-components";

export const AppCardBox = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  width: 125px;
  height: 125px;
  margin-right: 30px;
  margin-bottom: 30px;

  div {
    width: 70px;
    height: 70px;
    margin: 0 auto; 
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 50px;
  }

  h3 {
    font-size: 16px;
    color: #787878;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const SearchBarBox = styled.input`
  width: 60%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0 12px;    
  font-size: 16px;    
  border: 1px solid #ddd; 
  background-color: #ddd;
  border-radius: 5px;  

  
  &:focus {
    outline: none;
    border-color: #aaa;
  }

 
  &::placeholder {
    color: #7B7B7B;
    padding-left: 10px;
  }
`;