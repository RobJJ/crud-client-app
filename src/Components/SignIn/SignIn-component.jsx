import React from "react";
import { Link } from "react-router-dom";
//

function SignIn(params) {
  //
  return (
    <div className="w-full h-2/5 bg-green-200 flex flex-col justify-center items-center">
      <div>Hey, this area will be used for the signin</div>
      <Link type="button" to="/home" className="bg-white">
        GO TO THE HOME PAGE
      </Link>
    </div>
  );
}

export default SignIn;
