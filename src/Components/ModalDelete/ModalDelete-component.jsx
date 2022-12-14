import React from "react";
//
function ModalDelete({ func }) {
  //

  //
  return (
    <div className=" text-white text-center bg-blue-800 flex rounded-xl ">
      <span
        onClick={func}
        data-tag="confirm-yes"
        className="w-1/2 cursor-pointer"
      >
        YES
      </span>
      <span
        onClick={func}
        data-tag="confirm-no"
        className="w-1/2 cursor-pointer"
      >
        NO
      </span>
    </div>
  );
}
//
export default ModalDelete;
