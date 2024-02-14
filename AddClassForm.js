import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const AddClassForm = ({addClass}) => {
    const[name, setName] = useState('');
    const [description, setDescription] = useState('');
    const History = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newClass = {name, description};
        addClass(newClass);
        setName('');
        setDescription('');
        history.pushState('/');
    };
    return (
        <div>
            <h2>Add Class</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Class Name:
                  <input type ="text" value={name} onChange={(e) =>setName(e.target.value)}/>  
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange = {(e) => setDescription(e.target.value)}/>
                </label>
                <button type="submit">Add Class</button>
            </form>
        </div>
    );
};

export default AddClassForm;