// Canvas.js
import { useContext } from 'react';
import { ElementsContext } from '../contexts/ElementContext';
import { CanvasContainer } from '../StyledComponents';
import ElementBox from './ElementBox';

const Canvas = () => {
  const { elements } = useContext(ElementsContext);

  console.log('Canvas 렌더링');

  return (
    <CanvasContainer>
      {elements.map((element) => (
        <ElementBox key={element.id} element={element} />
      ))}
    </CanvasContainer>
  );
};

export default Canvas;
