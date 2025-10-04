function AccordionItem({ title, content, isActive, onClick }) {
    return (
        <div className="accordion-item">
        <button className="accordion-title" onClick={onClick}>
            {title}
        </button>
        {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
}

export default AccordionItem;