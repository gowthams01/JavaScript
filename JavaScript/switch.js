var age=parseInt(prompt('Enter Your Age'));
var brotherAge=parseInt(prompt('Enter Your Brother Age'));
var ch=3;
switch(ch)
{
    case 1:
    var c=age+brotherAge;
    console.log(c);
    break;
    case 3:
    var c=age-brotherAge;
    console.log(c);
    break;
    default:
        console.log('Error')
        break;    
}

