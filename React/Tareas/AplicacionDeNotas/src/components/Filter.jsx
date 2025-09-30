// src/Filter.jsx
function Filter({ filter, setFilter }) {
    return (
        <div className="filter-container">
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
        >
            <option value="Todas">Todas</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        </div>
    );
}

export default Filter;
