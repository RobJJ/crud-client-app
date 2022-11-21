import React from "react";
//
//

function ClientListItem({ itemObj }) {
  const { name } = itemObj;
  //
  return (
    <div className="w-full bg-green-400 rounded-lg p-1 text-center">
      <div>{name}</div>
    </div>
  );
}
//
export default ClientListItem;
