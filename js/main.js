var login = function (e) {    
    e.preventDefault();
    var user = document.querySelector("#exampleInputEmail1");
    var pw = document.querySelector("#exampleInputPassword1");
    
    if (true){
        location.href ="cuenta.html";
    }
}   

var sendBtn = document.querySelector("#submit");
sendBtn.addEventListener("click", login);

