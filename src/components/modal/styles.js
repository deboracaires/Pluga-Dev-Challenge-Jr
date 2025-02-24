import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 50%;
  max-width: 90%;
  height: 50%;
  padding: 20px;
  position: relative;
`;

export const ModalMainApp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const AppIcon = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: ${(props) => props.color};
  
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const ModalTitleBox = styled.div`
  background-color: #d8d8d8;
  min-width: 200px;
  padding: 0 20px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

export const ModalTitle = styled.h2`
  margin: 0 0 10px;
  color: #767676;
`;

export const ModalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-color: #A7A7A7;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background-color: rgb(121, 118, 118);
    cursor: pointer;
  }
`;

export const ModalHeading = styled.h3`
  margin-bottom: 15px;
  color: #707070;
`;

export const ViewedApps = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;

export const ViewedAppItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewedAppIcon = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  background-color: ${(props) => props.color};
  
  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

export const ViewedAppName = styled.span`
  font-size: 18px;
  font-weight: 600;
  background-color: #d8d8d8;
  color: #767676;
  width: 150px;
  min-height: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
`;
