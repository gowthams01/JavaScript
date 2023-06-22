// // var jobTitle='Doctor';
// var geographicLocation='Coimbatore';
// document.write('You will be a '+jobTitle+' in '+geographicLocation);
// function gow(){
//     var a=document.createElement('div');
//     var b=document.createTextNode('login');
//     document.body.appendChild(a);
//     a.appendChild(b);
// }
function datachange(){
    var a=document.getElementById('classic').getAttribute('placeholder');
    document.getElementById('paragraph1').innerHTML=a;
}