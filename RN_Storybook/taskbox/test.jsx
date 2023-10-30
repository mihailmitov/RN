import React, { createContext, useContext, useState } from "react";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

function App() {
  return (
    <div>
      <Accordion>
        <Accordion.Header>
          <button>Click Me</button>
        </Accordion.Header>
        <Accordion.Content>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              cupiditate.
            </p>
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

const Accordion = ({ children, props }) => {
  const [isExpand, setIsExpand] = useState(false);
  const handleIsExpand = setIsExpand((old) => !old);

  const value = { isExpand, handleIsExpand };
  return <Provider value={value}>{children}</Provider>;
};

const Header = ({ children }) => {
  const { handleIsExpand } = useContext(AccordionContext);
  return <div onClick={handleIsExpand}>{children}</div>;
};
const Content = ({ children }) => {
  const { isExpand } = useContext(AccordionContext);
  return isExpand ? <div>children</div> : null;
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
