function validateform(){
    var nameInput = document.getElementById('myForm');
    if (nameInput.value === ''){
        alert("please enter your name");
    }
    else{
        alert("Form submit successfully");
    }
}