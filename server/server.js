// Imports
// Require express - gives us a function
const express = require('express'); 
let bodyParser = require('body-parser');
//it knows to look in the node_modules folder.
    // unless, if you give it a 'dot wack' aka './folder/folder', 
        //then it can look in a different folder path you created

//Make instance of a server
const app = express();
const PORT = 5000;

// our app.use functions
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// Start up our server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
} );


// http://localhost:5000/math1
app.get('/math1', function(req, res){  
    console.log('in the GET MATH1 function');
    res.send(serverMathArrayOfObjects)
} );

app.post('/math1', (req, res) =>  { // cant use 'arrow function' with jQuery or client.js
    // where is our math?
    console.log( 'POST /math1 start');
    serverMathArrayOfObjects.push( req.body );
    console.log('POST req-body is', req.body);
    console.log('serverMathArrayOfObjects is:', serverMathArrayOfObjects );
    res.sendStatus(201);
    // save our math...
//send back math
} );





    //Texting an example array
  let serverMathArrayOfObjects = [ // ARRAY of OBJECTS
  { input1: 'example math 20',
    operator: '+', 
    input2: '5',
    math: '25', },

    { input1: 'example math 22',
    operator: '-', 
    input2: '6',
    math: '16', }
  ];
