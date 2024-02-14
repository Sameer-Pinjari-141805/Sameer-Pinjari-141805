import React from 'react';
import {Link} from 'react-router-dom';

const ClassDetails = ({ match, classes, deleteClass}) => {
    const {id} = match.params;
    const selectedClass = classes[id];

    const handleDelete = () => {
        deleteClass(id);
    };
    return (
        <div>
            <h2>Class Details</h2>
            {selectedClass && (
                <div>
                    <h3>{selectedClass.name}</h3>
                    <p>{selectedClass.description}</p>
                    <Link to={`/edit/${id}`}>Edit</Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>

            )}
        </div>
    );
};

export default ClassDetails;
