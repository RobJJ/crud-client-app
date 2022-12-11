import React from "react";
//
function ModalDelete({ func }) {
  return (
    <div className=" text-white bg-pink-300" onClick={func}>
      <h2>YES | NO </h2>
    </div>
  );
}
//
export default ModalDelete;
