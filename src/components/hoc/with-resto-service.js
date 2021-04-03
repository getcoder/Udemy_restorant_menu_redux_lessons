import React from "react";
import RestoServiceContext from "../resto-service-context/resto-service-context";

const WithRestoService = (Wrapped) => {
  return (props) => {
    return (
      <RestoServiceContext.Consumer>
        {(restoServise) => {
          return <Wrapped {...props} RestoService={restoServise} />;
        }}
      </RestoServiceContext.Consumer>
    );
  };
};

export default WithRestoService;
