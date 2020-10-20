function nameValidation(){
    var name = document.getElementById("name").value;
    if(name.length < 3){
        document.getElementById("nameHelp").innerHTML= "Toto pole musí obsahovať viac ako 2 znaky"; 
    }
    else{
        document.getElementById("nameHelp").innerHTML= ""; 
    }
    
}
function surnameValidation(){
    var name = document.getElementById("surname").value;
    if(name.length < 3){
        document.getElementById("surHelp").innerHTML= "Toto pole musí obsahovať viac ako 2 znaky"; 
    }
    else{
        document.getElementById("surHelp").innerHTML= ""; 
    }
    
}
function ageValidation(){
    var d = new Date();
    var age = document.getElementById("age");  
    var date = document.getElementById("birthDate").value;
   
    var birthYear = date.substr(0,4);
    var birthMonth = date.substr(5,2);
    var birthDay = date.substr(8,2);   
    var mathAge = d.getFullYear() - birthYear;
    
    
    if(birthMonth > d.getMonth() + 1){
        mathAge--;
        console.log(mathAge);
    }
    else if(birthMonth == d.getMonth() + 1){
        if(birthDay > d.getDate()){
            mathAge--;   
        }
    }
    if(mathAge == age.value){
        document.getElementById("ageHelp").innerHTML = "Vek sedí s dátumom narodenia";    
        age.setCustomValidity("");   
    }
    else{
        document.getElementById("ageHelp").innerHTML = "Vek a dátum narodenia sa nezhodujú!!!";
        age.setCustomValidity("Vek sa nezhoduje s dátumom");   
    }
}
function emailValidation(){
    var email = document.getElementById("email");
    var regex = new RegExp("^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,4}|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$");
    email.setCustomValidity("");

    if(regex.test(email.value) == false){
        document.getElementById("emailHelp").innerHTML = "Email je neplatný, mail musí obsahovať minimálne 3 písmena pred a za @ + doména musí byť v rozsahu 2-4 písmená ";
    }
    else{document.getElementById("emailHelp").innerHTML = "Email je platný";}
}


function checkYes(){
    document.getElementById("favFood").style.display = 'block';
}

function checkNo(){
    document.getElementById("favFood").style.display = 'none';
}
function checkOther(){
    var checkBox = document.getElementById('other').checked;
    if (checkBox == true) {
        document.getElementById('otherSubjects').style.display = 'block';
    } else {
        document.getElementById('otherSubjects').style.display = 'none';
    }
}
function chooseBrand(){
    var selectedOption = document.getElementById("brand").value;
    if(selectedOption === "apple"){
        document.getElementById("samsung").style.display = 'none';
        document.getElementById("apple").style.display = 'block';
    }
    else if(selectedOption === "samsung"){
        document.getElementById("apple").style.display = 'none';
        document.getElementById("samsung").style.display = 'block';
    }
    document.getElementById("iphone").style.display = 'none';
    document.getElementById("iphonePro").style.display = 'none';
    document.getElementById("s-class").style.display = 'none';
    document.getElementById("note").style.display = 'none';
}
function chooseIphone(){
    var model = document.getElementById("apple");

        if(model.value == "iphone"){
            document.getElementById("iphone").style.display = 'block';
            document.getElementById("iphonePro").style.display = 'none';
            document.getElementById("s-class").style.display = 'none';
            document.getElementById("note").style.display = 'none';
        }
        if(model.value == "iphonePro"){
            document.getElementById("iphone").style.display = 'none';
            document.getElementById("iphonePro").style.display = 'block';
            document.getElementById("s-class").style.display = 'none';
            document.getElementById("note").style.display = 'none';
        }
}
function chooseSamsung(){
    var model = document.getElementById("samsung");

        if(model.value == "s-class"){
            document.getElementById("iphone").style.display = 'none';
            document.getElementById("iphonePro").style.display = 'none';
            document.getElementById("s-class").style.display = 'block';
            document.getElementById("note").style.display = 'none';
        }
        if(model.value == "note"){
            document.getElementById("iphone").style.display = 'none';
            document.getElementById("iphonePro").style.display = 'none';
            document.getElementById("s-class").style.display = 'none';
            document.getElementById("note").style.display = 'block';
        }
}


