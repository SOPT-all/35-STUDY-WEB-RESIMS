import { ElementsProvider } from "./ElementContext";
import Canvas from "./Canvas";
import Sidebar from "./Sidebar";
import PropertyPanel from "./PropertyPanel";
import { AppContainer } from "./StyledComponents";
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
