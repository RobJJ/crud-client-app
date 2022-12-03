import React from "react";
//
function ClientInfo(params) {
  // const {} =
  return (
    <div className="bg-red-200 w-full h-full flex flex-col p-2 gap-2">
      {/* basic info */}
      <section className="bg-red-300 flex gap-2 p-2 text-center text-xl">
        <div className="bg-white w-1/2">
          <div>email: blah@kdnwqd.com</div>
          <div>contact: 088282828</div>
        </div>
        <div className="bg-white w-1/2">
          <div>balance: 5</div>
          <div>extra space here</div>
        </div>
      </section>
      {/* notes */}
      <section className="bg-red-300 h-full p-5">
        <textarea className="h-full w-full resize-none rounded-xl p-5 text-lg"></textarea>
      </section>
    </div>
  );
}

export default ClientInfo;
