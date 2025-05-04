import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      {children}
      <div>
        <h2>Auth page</h2>
      </div>
    </div>
  );
};

export default AuthLayout;
