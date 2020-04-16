var grocery_list = [
    {name:"Smør", question:'Hvor kommer smør fra?', choices:["Mælk", "Smør", "Høne"], Rewards:["en slikkepind", "en 2% rabat kupon", "et monsterkort"], right_choice:"Mælk"},
    {name:"Bananer", question:'Hvilken farver Bananer har?', choices:["Blå", "Gul", "Rød"], Rewards:["et monster kort", "en slikkepind", "et monsterkort"], right_choice:"Gul"},
    {name:"Æg", question:'Hvilken form har æg?', choices:["Aflang", "Firkant", "Cirkel"], Rewards:["et monsterkort", "et frozen kort", "pokemon kort"], right_choice:"Aflang"},
    {name:"Mælk", question:'Hvad hedder Koens babyer?', choices:["Ko", "Kalv", "Føl"], Rewards:["monsterkort", "et frozen kort", "et frozen kort"], right_choice:"Kalv"},
    {name:"Yoghurt", question:'Hvor kommer yoghurt fra?', choices:["Ko", "Smør", "Høne"], Rewards:["et monsterkort kort", "et frozen kort", "et frozen kort"], right_choice:"Ko"},
    {name:"Appelsinjuice", question:'Hvor kommer appelsin juice fra?', choices:["Æble", "Appelsin", "Pear"], Rewards:["et monsterkort kort", "5% rabat kupon", "et kort"], right_choice:"Appelsin"},
 ];
var grocery_list_selected = [];
var current_content = 'main_content';
var quiz_index = 0;

function quiz_begin() {
    if(grocery_list_selected.length > 0){
        build_quiz_item();
    }else{
        alert("Tilføj vare til indkøbsliten først");
        go_to_content('grocery_list')
    }
}

function next_quiz_item() {
    document.getElementById('p' + grocery_list_selected[quiz_index]).checked = false;
    quiz_index++;
    if(grocery_list_selected.length > quiz_index){
        build_quiz_item();
        go_to_content('find_og_scan')
    }else{
        quiz_index = 0;
        grocery_list_selected = [];
        alert("Flot, du har nu fundet alle varerne og kan gå til kassen.");
        go_to_content('main_content');
    }
}
// Quiz page + indhold
function build_quiz_item() {
    document.getElementById('h2_find').innerHTML = "Find " + grocery_list[grocery_list_selected[quiz_index]].name;
    document.getElementById('img_find').src = "grocery_img/" + grocery_list[grocery_list_selected[quiz_index]].name + ".png";
    document.getElementById('question').innerHTML = grocery_list[grocery_list_selected[quiz_index]].question;
    document.getElementById('q1').innerHTML = '<img  class="quiz_butter_answer" src="img_small/' + grocery_list[grocery_list_selected[quiz_index]].choices[0] + '.png" /> ' + grocery_list[grocery_list_selected[quiz_index]].choices[0]
    document.getElementById('q2').innerHTML = '<img  class="quiz_butter_answer" src="img_small/' + grocery_list[grocery_list_selected[quiz_index]].choices[1] + '.png" /> ' + grocery_list[grocery_list_selected[quiz_index]].choices[1]
    document.getElementById('q3').innerHTML = '<img  class="quiz_butter_answer" src="img_small/' + grocery_list[grocery_list_selected[quiz_index]].choices[2] + '.png" /> ' + grocery_list[grocery_list_selected[quiz_index]].choices[2]

    if (grocery_list[grocery_list_selected[quiz_index]].choices[0] == grocery_list[grocery_list_selected[quiz_index]].right_choice){
        document.getElementById('q1').onclick = function(){go_to_content('reward')};
    }else{
        document.getElementById('q1').onclick = function(){alert("Desværre ingen gevinst denne gang."); next_quiz_item();};
    }
    if (grocery_list[grocery_list_selected[quiz_index]].choices[1] == grocery_list[grocery_list_selected[quiz_index]].right_choice){
        document.getElementById('q2').onclick = function(){go_to_content('reward')};
    }else{
        document.getElementById('q2').onclick =  function(){alert("Desværre ingen gevinst denne gang."); next_quiz_item();};
    }
    if (grocery_list[grocery_list_selected[quiz_index]].choices[2] == grocery_list[grocery_list_selected[quiz_index]].right_choice){
        document.getElementById('q3').onclick = function(){go_to_content('reward')};
    }else{
        document.getElementById('q3').onclick =  function(){alert("Desværre ingen gevinst denne gang."); next_quiz_item();};
    }
    document.getElementById('r1').onclick = function(){alert("Tillykke du har vundet " + grocery_list[grocery_list_selected[quiz_index]].Rewards[0]);next_quiz_item();};
    document.getElementById('r2').onclick = function(){alert("Tillykke du har vundet " + grocery_list[grocery_list_selected[quiz_index]].Rewards[1]);next_quiz_item();};
    document.getElementById('r3').onclick = function(){alert("Tillykke du har vundet " + grocery_list[grocery_list_selected[quiz_index]].Rewards[2]);next_quiz_item();};
}

function item_clicked(objThis) {
    if(objThis.checked){
        grocery_list_selected.push(objThis.value);
    }else{
        grocery_list_selected = grocery_list_selected.filter(function(item) {
            return item !== objThis.value;
        })
    }
}
// login side
function login(email, password){ 
    if(email=="" && password==""){
        document.getElementById("login_page").style.display = "none"; 
        document.getElementById("home_page").style.display = "block"; 
    }else{
        alert('Forkert email eller kodeord.'); 
    }
}
// opret bruger knap
function go_to_opret_bruger(){ 
    document.getElementById("login_page").style.display = "none"; 
    document.getElementById("opret_bruger").style.display = "block";
}
// opret bruger side
function OpretBruger(firstname, lastname, opret_email, opret_password){ 
    if(firstname=="Mona" && lastname=="Lisa" && opret_email=="mona@lisa.dk" && opret_password=="123"){
        document.getElementById("opret_bruger").style.display = "none"; 
        document.getElementById("home_page").style.display = "block";
        alert("Du blev oprettet");
    }else{
        alert('Udfyld formular.'); 
    }
}
// logout knap
function logout(){
        document.getElementById("home_page").style.display = "none";
        document.getElementById("login_page").style.display = "block";
}

function go_to_content(new_content_name){
    document.getElementById(current_content).style.display = "none";
    document.getElementById(new_content_name).style.display = "block";
    current_content = new_content_name;
}
