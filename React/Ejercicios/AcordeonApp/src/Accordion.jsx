import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ sections }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="accordion">
        {sections.map((section, index) => (
            <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            isActive={index === activeIndex}
            onClick={() => toggleSection(index)}
            />
        ))}
        </div>
    );
}

export default Accordion;