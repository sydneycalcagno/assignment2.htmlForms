document.addEventListener("DOMContentLoaded", runQuiz); //make sure everything loads

function runQuiz(){

    let score = document.getElementById("score");
    let form = document.getElementById("form");
    let btn = document.getElementById("done");
    let planet = document.getElementById("planet");
    let sp = document.getElementById("sp");
    let place = document.getElementById("place");
    let prog = document.getElementById("progress");
    let player = document.getElementById("name");
    let tryAgain = document.getElementById("try");
    
    tryAgain.style.display = "none";
    prog.style.display = "none";
    score.style.display = "none";

    btn.addEventListener("click", submitQuiz);
    form.addEventListener('submit', submitQuiz);

    function submitQuiz(event){
        event.preventDefault();
        let planChoice = planet.options[planet.selectedIndex].text;
        let spChoice = sp.options[sp.selectedIndex].text;
        let placeChoice = place.options[place.selectedIndex].text;
        let one;
        let two;
        let three; 
        let sum;

        if(planChoice == "Saturn"){
            one = 33;
        }
        else{
            one = 0;
        }

        if(spChoice == "Randy Marsh"){
            two = 33;
        }
        else{
            two = 0; 
        }

        if(placeChoice == "Illinois"){
            three = 33;
        }
        else{
            three = 0;
        }

        if(player.value == ""){
            player.value = "Player"
        }

        btn.style.display = "none";
        tryAgain.style.display = "block";
        prog.style.display = "inline";
        score.style.display = "inline";

        score.innerHTML = player.value + "'s Score:";

        sum = one + two + three;
        prog.value = sum;

        tryAgain.addEventListener("click", refreshed);

        function refreshed(){
            location.reload();
        }
    } 
    
}

