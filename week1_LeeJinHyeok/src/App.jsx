import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';
import Sidebar from './components/Sidebar';
import { ElementsProvider } from './contexts/ElementContext';
import { SelectionProvider } from './contexts/SelectionContext';
import { AppContainer } from './StyledComponents';

function App() {
  console.log('App 렌더링');
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
