$(document).ready(onReady);
console.log( 'js' );

function onReady(){
// ---- ACTION 1. listeners ----
    $('#submitButton').on('click', clientIfFunction ); // listener works

    $('#plusButton').on('click', plusOperator ); // PLUS FUNCTION WORKS
    $('#minusButton').on('click', minusOperator ); // MINUS FUNCTION WORKS
    $('#divideButton').on('click', divideOperator ); // DIVIDE FUNCTION WORKS
    $('#multiplyButton').on('click', multiplyOperator ); // MULTIPLY FUNCTION WORKS

    $('#clearButton').on('click', clearInputsButton ); // clear FUNCTION WORKS
}

// INPUTS & CURRENT SELECTED OPERATOR
// let input1 = '';   // will be input 1's number
let operator = ''; // will be operator
// let input2 = ''; // will be input 2's number
// console.log('on start in put 1:', input1, 'input 2', input2 ); // works 

// EQUATION
let math = 0;

// EQUATION HOLDER - OBJECT
let mathObject = { // Starts Empty
}
let mathObjectObject =[];
let mathHistoryArray =[];

// ---- ACTION  2. --- If Logic ---- CLIENT SIDE ONLY
function clientIfFunction (){  
    // ADDED LOGIC, ONLY SEND DATA TO SERVER IF ALL INPUTS ARE ENTERED
    if ( Number($('#firstNumber').val() ) === '' || Number($('#firstNumber').val()) === 0 ){
        console.log('INPUT 1 is Empty' ); // checks input 1
        alert( `You didn't select a first number!` );
    }
    else if (operator === '' ){
        console.log('OPERATOR is Empty');// checks operator
        alert( `You didn't select an operator silly!` );
    } 
    else if ( Number($('#secondNumber').val() ) === '' ||  Number($('#secondNumber').val()) === 0){
        console.log('INPUT 2 is Empty'); // checks input 2
        alert( `You didn't select a second number!` );
    } 
    else {
        saveMathObject(); // moves to ACTION 3 to save inputs in an object
        console.log( 'Client IF loop Done');
    }
};


// ---- ACTION  3. --- Save INPUTS to OBJECT ---- CLIENT SIDE ONLY
function saveMathObject() {
    mathObject = {}; // clear object first
    mathObject.input1 = Number($('#firstNumber').val()); 
    mathObject.operator = operator;
    mathObject.input2 = Number($('#secondNumber').val());
console.log( mathObject ); //  check mathObject
serverIfLoop(); // check which OPERATOR and do next thing
// console.log( input1, operator, input2 ); // checks mathObject
};

function serverIfLoop (){
if ( operator === '+'){
        console.log( 'SERVER if loop - PLUS');
        plusMath();  
    } 
    else if (operator === '-'){
        console.log( 'SERVER if loop - MINUS');
        minusMath();
    } 
    else if (operator === '/'){
        console.log( 'SERVER if loop - DIVIDE');
        divideMath();
    } 
    else if (operator === '*'){
        console.log( 'SERVER if loop - MULTIPLY');
        multiplyMath();
    } 
    mathObjectObject.push(mathObject)
    console.log('math object object is:', mathObjectObject);
    appendToDOM();

};  // END of If Function











// ---- ACTION 3. ---- RUN MATH FUNCTIONS BELOW ----
function plusMath(){
    math = mathObject.input1 + mathObject.input2; // runs actual math 
    console.log('math is:', mathObject.input1, operator, mathObject.input2, '=', math ); // Checks actual math
};
function minusMath(){
    math = mathObject.input1 - mathObject.input2; // runs actual math 
    console.log('math is:', mathObject.input1, operator, mathObject.input2, '=', math ); // Checks actual math
};
function divideMath (){
    math = mathObject.input1 / mathObject.input2; // runs actual math 
    console.log('math is:', mathObject.input1, operator, mathObject.input2, '=', math ); // Checks actual math
};
function multiplyMath(){
    math = mathObject.input1 * mathObject.input2; // runs actual math 
    console.log('math is:', mathObject.input1, operator, mathObject.input2, '=', math ); // Checks actual math
};





// ---- ACTION 3. ---- PUSH TO MATH-OBJECT    &    APPEND MATH-OBJECT TO DOM
function appendToDOM (){
    console.log( 'appendToDOM START '); 
    
    console.log( 'mathObject is', 
    mathObject.input1, 
    mathObject.operator, 
    mathObject.input2, '& equals:', math ); ///tests mathObject & math 
    
    // $('#mathHistoryList').append(
    //     `<li>
    //     ${mathObject.input1}
    //     ${mathObject.operator}
    //     ${mathObject.input2}
    //     =
    //     ${math}
    //     </li>`
    //     )
    $('#mathHistoryList').append(
        `<li>
        ${mathObject.input1}
        ${mathObject.operator}
        ${mathObject.input2}
        =
        ${math}
        </li>`
        )
        mathHistoryArrayLoop();
};
    function mathHistoryArrayLoop (){
    for ( let i =0; i<mathHistoryArray.length; i++ ) {
        console.log(mathHistoryArray[i]);
    }
};
    
    
// ---- ADJACENT ACTIONS - CHANGE OPERATOR FUNCTIONS BELOW ----
function plusOperator (){ 
    operator =''; // clear operator variable value
    operator = '+'; // change operator variable value to plus variable value
    console.log( 'operator is now', operator ); // test operator function
    $('#currentOperator').empty();
    $('#currentOperator').append(`${operator}`);
}; // End of plusOperator

function minusOperator (){ // function for MINUS math
    operator ='';
    operator = '-';
    $('#currentOperator').empty();
    $('#currentOperator').append(`${operator}`);
    console.log( 'operator is now', operator );
}; // End of minusOperator

function divideOperator (){ // function for DIVIDE math
    operator ='';
    operator = '/';
    $('#currentOperator').empty();
    $('#currentOperator').append(` /`);
    console.log( 'operator is now', operator );
}; // End of divideOperator

function multiplyOperator (){ // function for multiply math
    operator ='';
    operator = '*';
    $('#currentOperator').empty();
    $('#currentOperator').append(` *`);
    console.log( 'operator is now', operator );
}; // End of multiplyOperator



function clearInputsButton (){  // Clears the INPUT fields -  works
    console.log( 'Clear Inputs button');
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    }; // End of ClearButton


function clearHistoryButton (){  // Clears the INPUT fields -  works
    console.log( 'Clear History Button ');
    mathHistoryArray = [];
    }; // End of ClearButton
      