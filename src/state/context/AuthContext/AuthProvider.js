import React, { createContext, useState } from 'react';

const initialState = {
    isOwner : false
};

export const AuthContext = createContext(initialState);

const AuthProvider = (props) => {
  const [isOwner, setIsOwner] = useState(initialState.isOwner);

  return (
    <AuthContext.Provider
      value={{
        isOwner,
        setIsOwner
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
