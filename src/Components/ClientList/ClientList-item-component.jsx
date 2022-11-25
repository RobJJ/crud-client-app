import React from "react";
import {
  FaAlignJustify,
  FaBars,
  FaGripLines,
  FaRegTrashAlt,
} from "react-icons/fa";
//
//

function ClientListItem({ itemObj, flipFunction }) {
  const { name } = itemObj;
  //

  //
  return (
    <div
      onClick={flipFunction}
      className="w-2/3 bg-green-400 rounded-lg p-3 flex items-center gap-5"
    >
      <div className="text-lg w-1/3 bg-gray-300 text-center">{name}</div>
      <FaBars className="text-2xl w-1/3 bg-gray-300" />
      <FaRegTrashAlt className="text-2xl w-1/3 bg-gray-300" />
    </div>
  );
}
//
export default ClientListItem;
