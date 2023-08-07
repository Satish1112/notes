import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import CssList from "../list/csslist";

function Css() {
  const [isCssAccordionOpen, setIsCssAccordionOpen] = useState(false);

  const handleCssAccordionToggle = () => {
    setIsCssAccordionOpen((prevState) => !prevState);
  };

  return (
    <Accordion
      value="css"
      onChange={handleCssAccordionToggle}
      expanded={isCssAccordionOpen}
    >
      <Accordion.Item value="css">
        <Accordion.Control
          chevron={
            isCssAccordionOpen ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronUp size="1rem" />
            )
          }
        >
          CSS
        </Accordion.Control>
        {isCssAccordionOpen && (
          <Accordion.Panel>
            <CssList />
          </Accordion.Panel>
        )}
      </Accordion.Item>
    </Accordion>
  );
}

export default Css;
