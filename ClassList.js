import React from 'react';
import {Link} from 'react-router-dom';

const ClassList = ({classes}) => {
    return (
        <div>
            <h2>Class List</h2>
            <ul>
                {classes.map((c, index) => (
                    <li key={index}>
                        <Link to={`/class/${index}`}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassList;