$(document).ready(onReady);

function onReady(){
    // ACTION 1. 
    console.log( 'js' );
    // $('#submitButton').on('click', submitMath ); // listener works
    $('#submitButton').on('click', inputValues ); // listener works

    $('#plusButton').on('click', plusPush ); // listener works
    $('#minusButton').on('click', minusPush );
    $('#divideButton').on('click', dividePush );
    $('#multiplyButton').on('click', multiplyPush );
    $('#clearButton').on('click', clearButton );

     // $('main').on( 'click', '.deleteButton', deleteButton ); // example syntax
}

// GLOBAL VARIABLES to save math button functions in a string
// OPERATORS 
let plus = '+';
let minus ='-';
let divide = '/';
let multiply = '*';
console.log( 'I like to ', plus, minus, divide, ' and',multiply); // tests variables

// INPUTS & CURRENT SELECTED OPERATOR
let input1 = 0;   // will be input 1's number
let operator = '';
let input2 = 0; // will be input 2's number
console.log('test 2 inputs, before adding values', input1, input2 ); // works 

// EQUATION 
let math = 0;

function ifFunction (){ 
    if (operator === '' ){
        alert( `You didn't select an operator silly!` );
    }
    else if ( operator === '+'){
    math = input1 + input2;
    console.log('math is:', input1, operator, input2, '=', math );
    } 
    else if (operator === '-'){
        math = input1 - input2;
        console.log('math is:', input1, operator, input2, '=', math );
    } 
    else if (operator === '/'){
        math = input1 / input2;
        console.log('math is:', input1, operator, input2, '=', math );
    } 
    else if (operator === '*'){
        math = input1 * input2;
        console.log('math is:', input1, operator, input2, '=', math );
    } 
};


function inputValues (){
    // console.log( 'button click' ); //test click listener
    
    // turn off auto clear input funtion. Instructions say to do this in a button
    // input1 = Number($('#firstNumber').val()); // takes input 1 value, converts itt to #
    // input2 = Number($('#secondNumber').val());// takes input 2 value, converts itt to #
    ifFunction();
    // console.log('inputs after function', (input1 + input2) );

    let mathObject = {
        input1: input1,
        operator: operator,
        input2: input2,
    }

   
    console.log('the answer is', math ); // works 
    // console.log( mathObject ); // works, kinda annoying 
    $('#mathHistoryList').append(
        `<li>
        ${mathObject.input1}
        ${mathObject.operator}
        ${mathObject.input2}
        =
        ${math}
        </li>`
    )

    // clears out all of the input fields 
};


function plusPush (){ // function for PLUS math
    operator ='';
    operator = plus;
    $('#currentOperator').empty();
    $('#currentOperator').append(` +`);
    console.log( 'operator is now', operator );
    math = input1 + input2;
};

function minusPush (){ // function for MINUS math
    operator ='';
    operator = minus;
    $('#currentOperator').empty();
    $('#currentOperator').append(` -`);
    console.log( 'operator is now', operator );
    math = input1 - input2 
};

function dividePush (){ // function for DIVIDE math
    operator ='';
    operator = divide;
    $('#currentOperator').empty();
    $('#currentOperator').append(` /`);
    console.log( 'operator is now', operator );
    math = input1 / input2;
};

function multiplyPush (){ // function for multiply math
    operator ='';
    operator = multiply;
    $('#currentOperator').empty();
    $('#currentOperator').append(` *`);
    console.log( 'operator is now', operator );
    math = input1 * input2;
};



function clearButton (){  // works
console.log( 'clear button');
$('#firstNumber').val('');
$('#secondNumber').val('');
};
  
