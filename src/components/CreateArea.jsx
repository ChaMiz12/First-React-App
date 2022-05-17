import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/icons-material/Fab'

export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    return (<div>
        <form>
            <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." row="3"></textarea>
            <button className="addButton" onClick={submitNote}><AddIcon /></button>
        </form>
    </div>)
}