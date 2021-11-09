import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import {ReactComponent as Arrow} from '../assets/arrow-left.svg'

const NotePage = () => {

    let { noteId } = useParams();
    let navigate = useNavigate();

    let [note, setNote] = useState(null);

    useEffect(() => {
       getNote()
    }, [noteId])

    let getNote = async ()=>{

        if(noteId === 'new') return


        let response = await fetch(`/api/notes/${noteId}/`);
        let data = await response.json();
        setNote(data)
        console.log(data)
    }

    let updateNote = async ()=>{
        let response = await fetch(
            `/api/notes/${noteId}/update/`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        });
    }

    let saveData = () =>{

        if(noteId !== 'new' && note.body === ''){
            deleteNote()
        }else if(noteId !== 'new'){
            updateNote();
        }else if(noteId === 'new' && note.body !== null){
            createNote()
        }
        navigate("/")
    }


    let deleteNote = async () =>{
        let response = await fetch(
        `/api/notes/${noteId}/delete/`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        navigate("/")
    }

    let createNote = async()=>{
        let response = await fetch(
            `/api/notes/create/`,{
                method : 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(note)
            }
        )
        navigate("/")
    }

    return (
        <>
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <Arrow onClick={saveData} />
                    </Link>
                </h3>
                {noteId !== 'new'?(
                    <button onClick={deleteNote}>Delete</button>
                ):(
                    <button onClick={saveData}>Done</button>
                
                )}                
            </div>
            <textarea onChange={
                        (e)=>{
                        setNote(
                            {
                                ...note,'body': e.target.value
                            }
                            )}
                        } 
                    value={note?.body}
            >
            </textarea>
        </div>
        </>
    )
}

export default NotePage;
