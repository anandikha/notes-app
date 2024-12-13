import React from "react";

function NoteDelete({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      hapus
    </button>
  );
}

export default NoteDelete;
