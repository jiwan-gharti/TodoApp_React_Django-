import React from 'react';
import { NavLink } from 'react-router-dom';




let getTime = (note) =>{
    return new Date(note.updated).toLocaleDateString()
}



let getTitle = (note) =>{

    let title = note.body.split("\n")[0]

    if(title.length > 30){
        return title.slice(0,30)
    }
    return title
}

const ListItem = ({note}) => {
    return (
        <NavLink to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span></p>
            </div>
        </NavLink>
    )
}

export default ListItem;
