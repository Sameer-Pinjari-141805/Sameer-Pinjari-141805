import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';


const EditClassForm =({match, classes, updateClass}) => {
    const {id} = match.params;
    const selectedClass = classes[id];
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    useEffect(() => {
        if(selectedClass) {
            setName(selectedClass.name);
            setDescription(selectedClass.description);
        }
    }, [selectedClass]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedClass ={name, description};
        updateClass(id, updatedClass);
        history.push('/class/${id}');
    };

    return (
        <div>
            <h2>Edit Class</h2>
            {selectedClass && (
                <form onSubmit={handleSubmit}>
                    <lable>
                        Class Name:
                        <input type="text" value ={name} onChnage = {(e) => setName(e.target.value)} />                        
                    </lable>
                    <lable>
                        Description:
                        <textarea value={description} onChnage = {(e) => setDescription(e.target.value)}/>
                    </lable>
                    <button  type="submit"> Update Class</button>
                </form>
            )}
        </div>
    );
};

export default EditClassForm;