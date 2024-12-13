import React from "react";
import NoteItem from "./noteitem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <div className="note-list-empty__message">
          <p>tidak ada catatan</p>
        </div>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
