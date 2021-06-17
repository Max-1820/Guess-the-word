var player1_name=localStorage.getItem("Name1");

var player2_name=localStorage.getItem("Name2");

player1_score=0;

player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";

document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;

document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn:"+player1_name;

document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;

function send(){
  var getWord=document.getElementById("word").value;

  fword=getWord.toLowerCase();

  console.log(fword);

 var firstChar=fword.charAt(1);

  console.log(firstChar);

 var length_divided_by_2=Math.floor(fword.length/2);

 var secChar=fword.charAt(length_divided_by_2);

  console.log(secChar);

  var length_minus_1=fword.length-1;

  var thiChar=fword.charAt(length_minus_1)

  console.log(thiChar);

  remove_charAt1 = fword.replace(firstChar, "_");
    remove_charAt2 = remove_charAt1.replace(secChar, "_");
    remove_charAt3 = remove_charAt2.replace(thiChar, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
   
   document.getElementById("output").innerHTML=row
}

questionTurn = "player1";
answerTurn = "player2";
function check(){
  getAnswer = document.getElementById("input_check_box").value;

  answer=getAnswer.toLowerCase();

  if (answer == fword){
    if(answerTurn=="player1"){
player1_score= player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
      player2_score=player2_score+1;
      document.getElementById("player2_score").innerHTML=player2_score;
    }
  }
  if (questionTurn == "player1"){
    questionTurn="player2";
    document.getElementById("player_question").innerHTML="Question Turn- "+ player2_name;
  }
  else
  {
questionTurn="player1";
document.getElementById("player_question").innerHTML="Question Turn- "+ player1_name;
  }
  if (answerTurn == "player1"){
    answerTurn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn- "+ player2_name;
  }
  else
  {
answerTurn="player1";
document.getElementById("player_answer").innerHTML="Answer Turn"+ player1_name;
  }
}