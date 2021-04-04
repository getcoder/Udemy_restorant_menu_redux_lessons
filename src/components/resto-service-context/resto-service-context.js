import React from "react";
import RestoService from "../../services/resto-service";

export const ServiceContext = React.createContext();

const RestoServiceContext = ({ children }) => {
  const restoService = new RestoService();
  return (
    <ServiceContext.Provider value={restoService}>
      {children}
    </ServiceContext.Provider>
  );
};

export default RestoServiceContext;
