import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useGlobalContext } from "../../Context-Reducer/Context";
import ModalDelete from "../ModalDelete/ModalDelete-component";
//
//

function ClientListItem({ itemObj }) {
  const { name, uid, balance } = itemObj;
  const { deleteClient, handleFocusedClientSetter } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);
  //
  const handleTrashBinClick = (uid) => {
    console.log("trashBin clicked");
    setModalActive(!modalActive);
  };
  const handleSelection = (e) => {
    console.log("selection clicked");
    // Get dataTag of user choice , yes or no
    const choice = e.target.dataset.tag;
    // If no, close selection bar
    if (choice === "confirm-no") {
      handleTrashBinClick();
    }
    // If yes, then delete the user
    if (choice === "confirm-yes") {
      deleteClient(uid);
    }
  };
  //
  return (
    <div className="max-w-2xl w-full bg-white border-2 border-white rounded-lg flex items-center text-blue-800 hover:border-black">
      <Link
        to={`client/:${uid}`}
        onClick={() => handleFocusedClientSetter(uid)}
        state={{ name: "TEST" }}
        className="p-1 text-lg w-2/4  text-center "
      >
        {name}
      </Link>
      <div className="p-1 text-lg w-1/4 ">
        <span>Bal: {balance}</span>
      </div>
      <div className="p-1 w-1/4 text-lg">
        {modalActive && <ModalDelete func={handleSelection} />}
        {!modalActive && (
          <FaRegTrashAlt
            onClick={() => handleTrashBinClick(uid)}
            className="text-2xl m-auto  cursor-pointer text-red-500"
          />
        )}
      </div>
    </div>
  );
}
//
export default ClientListItem;

// This is the original way to handleDelete
// onClick={() => deleteClient(uid)}
