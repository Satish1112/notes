import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const datalist = [
  {
    Question: "What is javascript?",
    Answer: "It's a programming language.",
  },
  {
    Question: "What is HTML?",
    Answer: "It's a markup language used for creating web pages.",
  },
  {
    Question: "What is CSS?",
    Answer: "It's a stylesheet language used for styling web pages.",
  },
];

function JavaScriptList() {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleAccordionToggle = (index) => {
    if (expandedItems.includes(index)) {
      // If the item is already expanded, remove it from the expandedItems array
      setExpandedItems((prevItems) =>
        prevItems.filter((item) => item !== index)
      );
    } else {
      // If the item is not expanded, add it to the expandedItems array
      setExpandedItems((prevItems) => [...prevItems, index]);
    }
  };

  return (
    <Accordion defaultValue="javascriptlist">
      {datalist.map((item, index) => (
        <Accordion.Item key={index} value={`javascriptlist-${index}`}>
          <Accordion.Control
            onClick={() => handleAccordionToggle(index)}
            chevron={
              expandedItems.includes(index) ? (
                <IconMinus size="1rem" />
              ) : (
                <IconPlus size="1rem" />
              )
            }
          >
            {item.Question}
          </Accordion.Control>
          {expandedItems.includes(index) && (
            <Accordion.Panel>{item.Answer}</Accordion.Panel>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default JavaScriptList;
