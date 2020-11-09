import * as React from "react";

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

const NavigationService = {
  navigationRef,
  navigate,
  goBack
};

export default NavigationService;
