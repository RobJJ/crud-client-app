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
.
Look into finding a way to handle debit and credit in one function..
.
.
Need to add a check for addClient, to make sure no two clients have the same name
.
.
Whne clicking HOME... maybe set focusedClient back to null ?
