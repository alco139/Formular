function nameValidation(){
    var name = document.getElementById("name").value;
    if(name.length < 3){
        document.getElementById("nameHelp").innerHTML= "Toto pole musí obsahovať viac ako 2 znaky"; 
    }
    else{
        document.getElementById("nameHelp").innerHTML= ""; 
    }
    
}
function checkYes(){
    document.getElementById("checkShow").style.display = 'block';
    

}

function checkNo(){
    document.getElementById("checkShow").style.display = 'none';

}
    
