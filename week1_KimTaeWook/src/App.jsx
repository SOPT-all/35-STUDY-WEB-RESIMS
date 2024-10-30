import React from "react";

import { AppContainer } from "./StyledComponents";
import { ElementsProvider } from "./contexts/ElementsContext";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertyPanel from "./components/PropertyPanel";
import { SelectionProvider } from "./contexts/SelectionContext";

function App() {
  console.log("App 렌더링");
  return (
    <ElementsProvider>
      <SelectionProvider>
        <AppContainer>
          <Sidebar />
          <Canvas />
          <PropertyPanel />
        </AppContainer>
      </SelectionProvider>
    </ElementsProvider>
  );
}

export default App;