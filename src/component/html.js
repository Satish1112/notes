import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import HtmlList from "../list/htmllist";

function Html() {
  const [isHtmlAccordionOpen, setIsHtmlAccordionOpen] = useState(false);

  const handleHtmlAccordionToggle = () => {
    setIsHtmlAccordionOpen((prevState) => !prevState);
  };

  return (
    <Accordion
      value="html"
      onChange={handleHtmlAccordionToggle}
      expanded={isHtmlAccordionOpen}
    >
      <Accordion.Item value="html">
        <Accordion.Control
          chevron={
            isHtmlAccordionOpen ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronUp size="1rem" />
            )
          }
        >
          HTML
        </Accordion.Control>
        {isHtmlAccordionOpen && (
          <Accordion.Panel>
            <HtmlList />
          </Accordion.Panel>
        )}
      </Accordion.Item>
    </Accordion>
  );
}

export default Html;
