Cosmeticshop

-> Created a Cosmetic Products shop website using React.js.<br />
-> Used 3 API's for products from Dior, Clinique and Nyx.<br />
-> Fetched Data in the noe backend server then displayed it to the frontend.<br />
-> Used bootstrap library for the dropdown menue for sorting.<br /><br />


Functionalities<br />
->Displayed products in a card format insie a grid.<br />
->User can toggle between brands category.<br />
->Search bar to search products from all three of the categories.<br />
->User can sort products on the basis of rating and prices.<br /><br />

Developement Approach<br />
-> As it was a small website just fetch data and display I went ahed with basic prop drilling approach and usestate for state management.<br />
-> Fetched the data in the App.js itself (ps: I know we should keep the App.js as clean as possible and I could have made a parent component to fetch data and send it to the child components).<br />
-> Used a dedicated backend server to fetch the data to safe keep the API from showing up in the network tab. Used axios library for the ease of fetching data.<br />
->Structure:<br />
                &emsp;-App.js<br />
                    &emsp;&emsp;- Top bar<br />
                        &emsp;&emsp;&emsp;- search bar<br />
                        &emsp;&emsp;&emsp;- filter dropdown<br />
                    &emsp;&emsp;- Searched product area<br />
                    &emsp;&emsp;- Display area when noting is searched<br /><br />
                
-> For more you can go througn the code it has proper comments for the ease of understanding.<br /><br />

Run the app<br />
-> using command "npm i" in cosmeticshop folder and in api folder install all the dependencies of server and client.<br />
-> run the server first with command "node app.js" in api folder.<br />
-> run client with command "npm run start" in cosmeticshop older in a new terminal.<br />
