import React, { useState } from 'react'

const Pagination = ({ _count, limit, _skip }) => {

    const [activePage, setActivePage] = useState(0)

    let items = [];
    const skip = (nbr) => {
        _skip(nbr)
        setActivePage(nbr)
    }

    for (let nbr = 0; nbr < _count; nbr += limit) {
        if (_count <= limit ) {
            // hide pagination compenents if limit and number is the same
            return false;

        }
        items.push(
            <a
                key={nbr} onClick={() => skip(nbr)}
                className={nbr === activePage ? "w3-button w3-orange" : "w3-button "}>
                {Math.ceil(nbr / limit + 1)}
            </a>
        );
    }


    return (<div className="w3-padding">

        {items}
    </div>)


}

export default Pagination;