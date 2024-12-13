import React from "react";
import DeleteButton from "./notedelete";
import NoteArchive from "./notearchive";
import NoteItemBody from "./noteitembody";

function NoteItem({ note, onDelete, onArchive }) {
  const { id, title, body, createdAt, archived } = note;

  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-action">
        <DeleteButton onClick={() => onDelete(id)} />
        <NoteArchive isArchived={archived} onClick={() => onArchive(id)} />
      </div>
    </div>
  );
}

export default NoteItem;
