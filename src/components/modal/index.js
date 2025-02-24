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
  console.log(app)

  return (
    <ModalOverlay onClick={handleOverlayClick} data-testid="modal-overlay">
      <ModalContent color={app.color}>
        <ModalMainApp>
          <AppIcon color={app.color}>
            <img src={app.icon} alt={app.name} />
          </AppIcon>
          <AppDetails>
            <ModalTitleBox>
              <ModalTitle data-testid="modal-title">{app.name}</ModalTitle>
            </ModalTitleBox>
            <ModalLink 
              href={app.link} 
              target="_blank" 
            >
              Acessar
            </ModalLink>
          </AppDetails>
        </ModalMainApp>

        <ModalHeading>Últimas ferramentas visualizadas</ModalHeading>

        <ViewedApps data-testid="viewed-apps">
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
