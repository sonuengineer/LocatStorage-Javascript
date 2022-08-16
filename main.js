function subm(){
 var name = document.getElementById('name').value;
var mail = document.getElementById('email').value;

const user = {
    name: name,
    mail: mail,
}
window.localStorage.setItem(" user details",JSON.stringify(user));  
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("submit").onclick = subm
    
}


