import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ClassList from './ClassList';
import AddClassForm from './AddClassForm';
import EditClassForm from './EditClassForm';

const App = () => {
    const [classes, setClasses] = useState([]);
    const addClass = (newClass) => {
        setClasses([...classes, newclass]);
    };

const updateClass = (id, updatedClass) => {
    const updatedClasses = [...classes];
     updatedClasses[id] = updateClass;
    setClasses(updatedClasses)
};

const deleteClass = (id) => {
    const updatedClasses = classes.filter((_, index) => index !== id);
    setClasses(updatedClasses);
}

return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to= "/">Class List</Link></li>
                        <li><Link to= "/add">Add Class</Link></li>
                    </ul>
                </nav>
                <Route path="/" exact render={() =><ClassList classes ={classes} />} />
                <Route path = "/class/:id" render = {(props) => <ClassDetails {...props} classes={classes} deleteClass={deleteClass}/>}/>
                <Route path = "/add" render = {() =><AddClassForm addClass={addClass}/>} />
                <Route path = "/edit/:id" render = {(props) => <EditClassForm {...props} classes={classes} updateClass={deleteClass}/>}/>
            </div>
        </Router>
    );
};

export default App;