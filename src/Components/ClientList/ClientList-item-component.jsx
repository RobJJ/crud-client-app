import React from "react";
import { Link } from "react-router-dom";
import {
  FaAlignJustify,
  FaBars,
  FaGripLines,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
//

function ClientListItem({ itemObj }) {
  const { name, uid, balance } = itemObj;
  const { deleteClient, setFocusedClient, handleFocusedClientSetter } =
    useGlobalContext();
  //
  //
  return (
    <div className="max-w-2xl w-full bg-white border-2 border-white rounded-lg p-1 flex items-center text-blue-800">
      <Link
        to={`client/:${uid}`}
        onClick={() => handleFocusedClientSetter(uid)}
        state={{ name: "TEST" }}
        className="text-lg w-2/4  text-center"
      >
        {name}
      </Link>
      <div className="text-lg w-1/4 ">Balance: {balance}</div>
      <FaRegTrashAlt
        onClick={() => deleteClient(uid)}
        className="text-2xl w-1/4  cursor-pointer"
      />
    </div>
  );
}
//
export default ClientListItem;

//<FaBars className="text-2xl w-1/4 bg-gray-300" />
