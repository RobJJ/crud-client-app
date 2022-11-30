import SignIn from "../Components/SignIn/SignIn-component";
import Welcome from "../Components/Welcome/Welcome-component";

function LandingPage(params) {
  //
  //
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <div className="w-2/3 h-2/3 bg-pink-200">
        <Welcome />
        <SignIn />
      </div>
    </div>
  );
}

export default LandingPage;
