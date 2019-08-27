 
import React from 'react';

const NameFilter = ({search = '', onChange}) => (

    <div className="search-btn-item">

        <input type="text" placeholder="Search for...." className="btn-search"     onChange={ onChange   }  />

    </div>
)

export default NameFilter