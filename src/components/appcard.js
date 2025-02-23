import React from 'react';
import { AppCardBox } from "./styles"

const AppCard = ({ app, onClick }) => (
  <AppCardBox onClick={onClick} color={app.color}>
    <div>
      <img src={app.icon} alt={app.name}  />
    </div>
    <h3>{app.name}</h3>
  </AppCardBox>
);

export default AppCard;
