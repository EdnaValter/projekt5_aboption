function login(email, password){
    if(email=="edna@valter.dk" && password=="1234"){
        document.getElementById("login_page").style.display = "none";
        document.getElementById("home_page").style.display = "block";
    }else{
        alert('Forkert email eller kodeord.');
    }
}

function go_to_opret_bruger(){
    document.getElementById("login_page").style.display = "none";
    document.getElementById("opret_bruger").style.display = "block";
}



function OpretBruger(firstname, lastname, email, password){
    if(firstname=="Anton" && lastname=="Wich"){
        document.getElementById("opret_bruger").style.display = "none";
        document.getElementById("home_page").style.display = "block";
        alert("Du blev oprettet");
    }else{
        alert('Udfyld formular.');
    }
}

function logout(){
        document.getElementById("home_page").style.display = "none";
        document.getElementById("login_page").style.display = "block";
}

function go_to_content(current_content_name, new_content_name){
    document.getElementById(current_content_name).style.display = "none";
    document.getElementById(new_content_name).style.display = "block";

}
