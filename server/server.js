// Imports
// Require express - gives us a function
const express = require('express'); 
const bodyParser = require('body-parser');
// const moduleArrayOfMathObjects = require('./modules/math1.js'); -- COULD NOT GET MODULE TO SEND MORE THAN AN EMPTY OBJECT
//it knows to look in the node_modules folder.
    // unless, if you give it a 'dot wack' aka './folder/folder', 
        //then it can look in a different folder path you created

//Make instance of a server
const app = express();
const PORT = 5000;

// our app.use functions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));
// Start up our server


// http://localhost:5000/math1

// ---- FIRST GET FUNCTION ----
app.get('/math1', function(req, res){  
    res.send(moduleArrayOfMathObjects)
    console.log('GET MATH1 function, moduleArrayOfMathObjects is:', 
    moduleArrayOfMathObjects);
    console.log('GET req.body is:', req.body );
} );

// ---- FIRST POST FUNCTION ----
app.post('/math1', (req, res) =>  { // cant use 'arrow function' with jQuery or client.js
    // where is our math?
    console.log( 'POST /math1 start. req-body is:', req.body  );
    let reqBodyVariable = req.body;

    moduleArrayOfMathObjects.push( reqBodyVariable ); // push works
    console.log('reqBodyVariable is', reqBodyVariable );  // reqBodyVariable console logs
    console.log('moduleArrayOfMathObjects is:', moduleArrayOfMathObjects );// moduleArrayOfMathObjects console logs
    res.sendStatus(201);
    // save our math...
//send back math
} );






let moduleArrayOfMathObjects = [ // ARRAY of OBJECTS
{ input1: 'example math 20',
  operator: '+', 
  input2: '5',
  math: '25', },

  { input1: 'example math 22',
  operator: '-', 
  input2: '6',
  math: '16', }
];










// ---- SECOND GET FUNCTION ----







app.listen(PORT, () => {
    console.log('listening on port', PORT);
} );