import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Logo />
      <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa4 pointer">Sign Out</p>
    </nav>
  );
};

export default Navigation;