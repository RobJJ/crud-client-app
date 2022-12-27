import SignIn from "../Components/SignIn/SignIn-component";
import Welcome from "../Components/Welcome/Welcome-component";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function LandingPage(params) {
  //
  console.log("Landing PAge rendered");
  const { userActive } = useGlobalContext();
  //
  if (userActive) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div className="max-w-[800px] w-screen h-screen m-auto bg-blue-800 flex justify-center items-center">
        <div className="w-2/3 h-2/3 med:w-5/6">
          <Toaster />
          <Welcome />
          <SignIn />
        </div>
      </div>
    );
  }
  //
}

export default LandingPage;
