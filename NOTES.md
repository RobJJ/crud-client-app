Initial load in after user signs in is pretty slow..
We are fetching current data from the DB and then setting state with this info...
However from that point on, things will move faster as we will use local state to display info... info and changes will be pushed to db but the user will actually interact with the local state...
---- this is something I would like to discuss with T ----
.
.
.
Find a possible solution to the id (url uid) problem...
.
.
Dont actually need the name in the debit and credit note transaction page ... we are using it for matching... look into a way to remove this.
.
..
Add a delete option to the debits and credits in the client-receipt component
.
.
Style the scroll bars to have no background. WIll look much better on the blue backdrop
https://www.npmjs.com/package/tailwind-scrollbar
.
.
.
Discuss the implementation of the ProtectedRoute and the way the conditional check works... Not sure if this is a good approach - ie. Having the Boolean varaible sitting in the AppProvider.... something feels off about it...
Check refresh!!
