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
  const { name, uid } = itemObj;
  const { deleteClient, dispatch, setFocusedClient } = useGlobalContext();
  //
  // const createNameForUrl = (name) => {
  //   return name.split(" ")[0];
  // };
  const handleThisClick = () => {
    setFocusedClient({ ...itemObj });
    // dispatch({ type: "SET_FOCUSED_CLIENT_OF_USER", payload: { uid, itemObj } });
  };
  //
  return (
    <div className="w-2/3 bg-green-400 rounded-lg p-3 flex items-center gap-5">
      <Link
        to={`client/:${uid}`}
        onClick={handleThisClick}
        state={{ name: "TEST" }}
        className="text-lg w-1/3 bg-gray-300 text-center"
      >
        {name}
      </Link>
      <FaBars className="text-2xl w-1/3 bg-gray-300" />
      <FaRegTrashAlt
        onClick={() => deleteClient(uid)}
        className="text-2xl w-1/3 bg-gray-300"
      />
    </div>
  );
}
//
export default ClientListItem;
