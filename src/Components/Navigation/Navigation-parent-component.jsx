import React, { useRef } from "react";
//

// This component needs to serve as a header type of navbar... it can have multiple tags that are hidden until the right event happens. The bar is used on the home page and persists... It is not present in the landing page. Use Refs to trigger this
function Navigation(params) {
  //
  const homeTab = useRef();
  const handleClientNavigation = () => {
    homeTab.current.classList.remove("hidden");
  };
  //
  return (
    <div className="w-1/2 h-1/2 bg-blue-200 flex flex-col gap-2">
      {/* This will be a route navlink bar */}
      <div className="w-full h-14 bg-green-100 flex gap-2">
        <div className="bg-green-300 h-full p-3 underline">Sign Out</div>
        <div ref={homeTab} className="bg-green-300 h-full p-3 underline hidden">
          Home
        </div>
      </div>
      <div className="bg-orange-100  flex gap-2 mt-10">
        <div className="bg-orange-300 p-4">User signs in</div>
        <div onClick={handleClientNavigation} className="bg-orange-300 p-4">
          User checks clients
        </div>
      </div>
    </div>
  );
}

export default Navigation;

// Could design the structure like this.
// <nav class="crumbs">
//     <ol>
//         <li class="crumb"><a href="#">Bikes</a></li>
//         <li class="crumb"><a href="#">BMX</a></li>
//         <li class="crumb">Jump Bike 3000</li>
//     </ol>
// </nav>

// <h1>Jump Bike 3000</h1>
// <p>This BMX bike is a solid step into the pro world. It looks as legit as it rides and is built to polish your skills.</p>
