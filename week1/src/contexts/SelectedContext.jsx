import React, { createContext, useState } from "react";

export const SelectedContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const selectElement = (id) => {
    setSelectedElementId(id);
  };

  return (
    <SelectedContext.Provider value={{ selectedElementId, selectElement }}>
      {children}
    </SelectedContext.Provider>
  );
};
