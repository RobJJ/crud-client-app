import React, { useRef } from "react";
//

//

function ReceiptListItem({ itemObj }) {
  // Destructure from prop passed in
  const { name, age, country, notes } = itemObj;
  const noteRef = useRef(null);
  //
  const handleNoteExpansion = () => {
    // Add or remove hidden class onClick
    if (noteRef.current.classList.contains("hidden")) {
      noteRef.current.classList.remove("hidden");
    } else {
      noteRef.current.classList.add("hidden");
    }
  };
  //
  return (
    <div className="w-full bg-green-100 flex flex-col rounded-lg p-2">
      {/* TOP ROW FOR ITEM */}
      <div
        onClick={handleNoteExpansion}
        className="w-full flex text-center items-center "
      >
        <div className="w-1/3">{name}</div>
        <div className="w-1/3">{age}</div>
        <div className="w-1/3">{country}</div>
      </div>
      {/* BOTTOM ROW FOR ITEM - HIDDEN BY DEFAULT */}
      <div
        ref={noteRef}
        className="w-full border-t-2 border-black hidden p-2 mt-2"
      >
        <div className="text-center">{notes}</div>
      </div>
    </div>
  );
}

export default ReceiptListItem;
