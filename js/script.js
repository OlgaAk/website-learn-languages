var questions = new Array();
questions[0] = 'Is there a difference between a jungle and a rain forest?';
questions[1] = 'What is the world\'s most common religion?',
questions[2] = 'What is the second largest country (in size) in the world?';

var choices = new Array();
choices[0] = ['No difference', 'Some difference', 'Completely different'],
choices[1] = ['Christianity', 'Buddhism', 'Hinduism', 'Islam'],
choices[2] = ['USA', 'China', 'Canada', 'Russia'];

var answers = new Array();
answers[0] = ['Some difference'],
answers[1] = ['Christianity'],
answers[2] = ['Canada'];

var score = 0;
i= 0;

var listQuestion = function(){  
    if(i<questions.length){
        document.getElementById("myDiv1").innerHTML = '<p>'+questions[i]+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices[i].length; k++){
            choicesOutput.push(
                '<p><input type = "checkbox" name ='
                +' "questionchoice">'+choices[i][k]+'</p>');
        }
        document.getElementById("myDiv2").innerHTML =choicesOutput.join("");
        document.getElementById("myDiv3").innerHTML = 
            "<p><button  input type = 'submit' onClick = 'getRadioValue()'>Check</button></p> <br>";
    }
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
                 console.log(value);
                  console.log(document.getElementsByName('questionchoice')[h]);
            value = document.getElementsByName('questionchoice')[h].nextSibling.textContent;
            
            score++;
          
             console.log(answers[i].toString());
        }
    }

   

    if (value== answers[i]){
        document.getElementById("myDiv4").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv4").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
           +"ext Question</button>"; 
    }
    i++;
};
var whatIsScore = function(){
    return score; 
};
function loadContent(){
    document.getElementById("myDiv4").innerHTML="";
    listQuestion();
}
window.onload = listQuestion;
