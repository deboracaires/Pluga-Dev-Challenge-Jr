import React from 'react';
import { 
  ModalOverlay, 
  ModalContent,
  ModalMainApp, 
  AppIcon, 
  AppDetails, 
  ModalTitle, 
  ModalLink, 
  ModalHeading, 
  ViewedApps, 
  ViewedAppItem, 
  ViewedAppIcon, 
  ViewedAppName, 
  ModalTitleBox
} from './styles';

const Modal = ({ app, viewedApps, onClose }) => {
  if (!app) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent color={app.color}>
        <ModalMainApp>
          <AppIcon color={app.color}>
            <img src={app.icon} alt={app.name} />
          </AppIcon>
          <AppDetails>
            <ModalTitleBox>
              <ModalTitle>{app.name}</ModalTitle>
            </ModalTitleBox>
            <ModalLink 
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Acessar
            </ModalLink>
          </AppDetails>
        </ModalMainApp>

        <ModalHeading>Últimas ferramentas visualizadas</ModalHeading>

        <ViewedApps>
          {viewedApps.map((vApp, index) => (
            <ViewedAppItem key={index}>
              <ViewedAppIcon color={vApp.color}>
                <img src={vApp.icon} alt={vApp.name} />
              </ViewedAppIcon>
              <ViewedAppName>{vApp.name}</ViewedAppName>
            </ViewedAppItem>
          ))}
        </ViewedApps>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
