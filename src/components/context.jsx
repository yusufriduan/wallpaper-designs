import React, { createContext, useState } from 'react';

export const ResolutionContext = createContext();

export const ResolutionProvider = ({ children }) => {
  const [resolution, setResolution] = useState({ width: '', height: '' });
  
  return (
    <ResolutionContext.Provider value={{ resolution, updateResolution }}>
      {children}
    </ResolutionContext.Provider>
  );
}