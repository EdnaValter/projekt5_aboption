function login(email, password){
    if(email=="edna@valter.dk" && password=="1234"){
        document.getElementById("login_page").style.display = "none";
        document.getElementById("home_page").style.display = "block";
    }else{
        alert('Forkert email eller kodeord.');
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
/*
function OpretBruger() {
    document.getElementById(OpretBruger).style.display ="block";
    document.getElementById(OpretBruger).style.display = "none";
}*/