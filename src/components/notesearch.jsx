import React from "react";

function NoteSearch({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NoteSearch;
