import { Link } from "react-router-dom";

function LandingPage(params) {
  //
  const handleRedirect = () => {
    console.log("Working so far!");
  };
  //
  return (
    <div className="w-full h-full bg-blue-200 flex">
      <div className="w-2/3 h-2/3">
        <h2>Im the landing page and will be used for logging in etc</h2>
        <Link type="button" to="/Home">
          GO TO THE HOME PAGE
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
