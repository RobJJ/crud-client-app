import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
//
//
const transactionTemplate = {
  type: "",
  date: "",
  amount: "",
  sessions: 0,
  notes: "",
  id: "",
};
//
function ClientTransaction(params) {
  //
  const [transaction, setTransaction] = useState(transactionTemplate);
  const formRef = useRef();
  //
  const handleTransactionChoice = (e) => {
    // set the transaction type
    setTransaction({ ...transaction, type: e.target.dataset.tag });
    // hide amount if credit is picked

    //  make current button active with adding a style of some sort
    e.target.classList.add("bg-slate-300");
    // show the form to user
    formRef.current.classList.remove("opacity-25");
  };
  //
  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    // setTransaction((prev) => {
    //   return {
    //     ...prev,
    //     id: uuidv4(),
    //   };
    // });
    console.log(transaction);
  };
  //
  return (
    <div className="bg-red-200 w-full h-full p-5 flex justify-center">
      <form className="bg-red-300 max-w-md w-full h-full flex flex-col gap-2 p-2 ">
        <section className="bg-yellow-200 text-center flex p-2 gap-1 text-xl">
          <div className="w-1/2 bg-white">Debit</div>
          <div className="w-1/2 bg-white">Credit</div>
        </section>
        <section className="bg-yellow-200">Inputs</section>
        <section className="bg-yellow-200">Submit</section>
      </form>
    </div>
  );
}

export default ClientTransaction;

// give the form width a max size.. and then make it cover full space if able
// with the max width set.. it will only be that big and then shrink as screen size decreases... set max width to a size... but also set w-full
