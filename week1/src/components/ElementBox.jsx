import React, { useContext } from "react";
import { ElementBoxContainer } from "../StyledComponents";
import { SelectedContext } from "../contexts/SelectedContext";

const ElementBox = ({ element }) => {
  const { selectedElementId, selectElement } = useContext(SelectedContext);
  const isSelected = selectedElementId === element.id;

  console.log(`ElementBox (${element.name}) 렌더링`);

  return (
    <ElementBoxContainer
      onClick={() => selectElement(element.id)}
      color={element.color}
      $isSelected={isSelected}
    >
      {element.name}
    </ElementBoxContainer>
  );
};

export default ElementBox;
