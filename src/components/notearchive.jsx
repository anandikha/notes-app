import React from "react";

function NoteArchive({ isArchived, onClick }) {
  return (
    <button className="archive-button" onClick={onClick}>
      {isArchived ? "kembalikan" : "arsipkan"}
    </button>
  );
}

export default NoteArchive;
