import React, { useContext } from "react";
import { ElementsContext } from "../contexts/ElementContext";
import { SidebarContainer } from "../StyledComponents";
import { SelectedContext } from "../contexts/SelectedContext";

const Sidebar = () => {
  const { elements } = useContext(ElementsContext);
  const { selectedElementId, selectElement } = useContext(SelectedContext);

  console.log("Sidebar 렌더링");

  return (
    <SidebarContainer>
      <h3>Elements</h3>
      <ul>
        {elements.map((element) => (
          <li
            key={element.id}
            onClick={() => selectElement(element.id)}
            style={{
              cursor: "pointer",
              fontWeight: selectedElementId === element.id ? "bold" : "normal",
            }}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
