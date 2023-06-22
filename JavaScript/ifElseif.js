var paper1=parseInt(prompt('Enter Your Mark'));
var paper2=parseInt(prompt('Enter Your Mark'));
var paper3=parseInt(prompt('Enter Your Mark'));
if(paper1>paper2&&paper1>paper2)
{
    console.log('paper1 is greater');
}
else if(paper2>paper1&&paper2>paper3)
{
    console.log('paper2 is greater');
}
else if(paper3>paper1&&paper3>paper2)
{
    console.log('paper1 is greater');
}
else{
    console.log('Invalid');
}
