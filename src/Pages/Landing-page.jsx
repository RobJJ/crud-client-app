import SignIn from "../Components/SignIn/SignIn-component";
import Welcome from "../Components/Welcome/Welcome-component";

function LandingPage(params) {
  //
  //
  return (
    <div className=" max-w-screen-md w-screen h-screen m-auto bg-blue-800 flex justify-center items-center">
      <div className="w-2/3 h-2/3">
        <Welcome />
        <SignIn />
      </div>
    </div>
  );
}

export default LandingPage;
