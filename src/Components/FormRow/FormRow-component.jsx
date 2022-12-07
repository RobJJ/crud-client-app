import React from "react";
//
function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="flex flex-col p-2 gap-1 ">
      <label className="pl-2">{labelText}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="p-1 pl-2 rounded-lg"
      />
    </div>
  );
}
//
export default FormRow;
