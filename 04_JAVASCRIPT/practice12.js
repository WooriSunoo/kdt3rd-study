console.log('Connected');

let no_1 = 1;
console.log('no_1 = '+ no_1);
let no_2 = 2;
console.log('no_2 = '+ no_2);
let no_3 = 3;
console.log('no_3 = '+ no_3);

function add(no_1, no_2, no_3){
    let result1 = no_1+ no_2 + no_3;
    console.log('no_1+ no_2 + no_3 = '+result1);
    alert('no_1+ no_2 + no_3 = '+ result1);

}

add(no_1, no_2, no_3);


function sub(no_1, no_2){
    let result2 = no_1-no_2;
    console.log('no_1-no_2 = '+ result2);
    alert('no_1-no_2 = '+ result2);

}

sub(no_1, no_2);


function divide(no_1, no_2){
    let result3 = no_1/no_2;
    console.log('no_1 / no_2 = '+ result3);
    alert('no_1 / no_2 = '+ result3);

}

divide(no_1, no_2);


function mul(no_1, no_2){
    let result4 = no_1*no_2;
    console.log('no_1 * no_2 = '+ result4);
    alert('no_1 * no_2 = '+ result4);

}

mul(no_1, no_2);

