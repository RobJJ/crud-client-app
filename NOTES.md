.
Discuss the implementation of the ProtectedRoute and the way the conditional check works... Not sure if this is a good approach - ie. Having the Boolean varaible sitting in the AppProvider.... something feels off about it...
Check refresh!! -> the way i've implemented it doesnt work that well..
It's calling protectRoute first and which sees the userActive state as false, which routes to landing page login... then the context is rendered which sets to true and then reroutes the user back to their home page...
.
Discuss how to keep large data -
.
.
todo tomorrow: incorp the sessionStorage to handle user token and login state
