// Imports
// Require express - gives us a function
const express = require('express'); 
//it knows to look in the node_modules folder.
    // unless, if you give it a 'dot wack' aka './folder/folder', 
        //then it can look in a different folder path you created

//Make instance of a server
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

//run the server, on the port we want
// Start up our server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
    console.log( 'SERVER RUNNING ON PORT' );
  });