import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({ title, body, createdAt }) {
  if (!title || !body || !createdAt) {
    return <p>Data catatan tidak lengkap.</p>;
  }

  return (
    <div className="note-item-body">
      <h3 className="note-title">{title}</h3>
      <span className="note-date">{showFormattedDate(createdAt)}</span>
      <p className="note-body-content">{body}</p>
    </div>
  );
}

export default NoteItemBody;
