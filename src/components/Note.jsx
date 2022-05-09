import React from "react";

export default function Note() {
    return (
        <div className="note" contentEditable="true">
            <h1>this is the note title</h1>
            <p>This is the note content</p>
        </div>
    )
}