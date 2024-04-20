import { useState } from "react";

//  PascalConvention
function ListGroup() {
    let items = ['Edinburgh', 'Glasgow', 'Aderdeen', 'North Berwick',];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //  Event handler

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}
                    </li>
                ))}
            </ul >
        </>
    );
}

export default ListGroup;