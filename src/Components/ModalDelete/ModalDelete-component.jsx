import React from "react";
//
function ModalDelete({ func }) {
  //

  //
  return (
    <div className=" text-white text-center bg-pink-300 flex">
      <span onClick={func} data-tag="confirm-yes" className="w-1/2">
        YES
      </span>
      <span onClick={func} data-tag="confirm-no" className="w-1/2">
        NO
      </span>
    </div>
  );
}
//
export default ModalDelete;
