import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as AddButton} from '../assets/add.svg';

const AddNote = () => {
    return (
        <div>
            <NavLink to="/note/new" className="floating-button">
                <AddButton />
            </NavLink>
        </div>
    )
}

export default AddNote;
