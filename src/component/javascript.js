import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import JavaScriptList from "../list/javascriptlist";

function JavaScript() {
  const [isJsAccordionOpen, setIsJsAccordionOpen] = useState(false);

  const handleJsAccordionToggle = () => {
    setIsJsAccordionOpen((prevState) => !prevState);
  };

  return (
    <Accordion
      value="javascript"
      onChange={handleJsAccordionToggle}
      expanded={isJsAccordionOpen}
    >
      <Accordion.Item value="javascript">
        <Accordion.Control
          chevron={
            isJsAccordionOpen ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronUp size="1rem" />
            )
          }
        >
          JAVASCRIPT
        </Accordion.Control>
        {isJsAccordionOpen && (
          <Accordion.Panel>
            <JavaScriptList />
          </Accordion.Panel>
        )}
      </Accordion.Item>
    </Accordion>
  );
}

export default JavaScript;
