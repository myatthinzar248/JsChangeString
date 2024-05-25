var userInput = document.querySelector("#input");
var btn = document.querySelector("#click");
var text = document.querySelector("p");

btn.addEventListener("click",properCase);

function properCase(){
    
    var result = userInput.value;
    console.log(result);
    var lowresult = result.toLowerCase();
    var words = lowresult.split(" ");
    console.log(words);
    
    for (var i=0; i< words.length; i++){
        text.innerText += words[i][0].toUpperCase() + words[i].substring(1);
    }


}