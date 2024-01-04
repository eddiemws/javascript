
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>IQ Quiz</h1>
<p><em>A simple quiz to test your knowledge of IQ.</em></p>


<div id="form">



<p id="question1"></p>


<label id="form0A">
    <input type="radio" name="ans1" value="Berlin">Berlin
</label>
<label id="form0B">
    <input type="radio" name="ans1" value="Madrid">Madrid
</label>

<label id="form0C">
    <input type="radio" name="ans1" value="Paris">Paris
</label>

<label id="form0D">
    <input type="radio" name="ans1" value="Rome">Rome
</label>



<!-- <p id="question2"></p>

<label id="form1A">
    <input type="radio" name="ans2" value="Venus">Venus
</label>
<label id="form1B">
    <input type="radio" name="ans2" value="Mars">Mars
</label>

<label id="form1C">
    <input type="radio" name="ans2" value="Jupiter">Jupiter
</label>

<label id="form1D">
    <input type="radio" name="ans2" value="Saturn">Saturn
</label> -->




</div>


<button class="submit" onclick="checkAns() ">Submit</button>


<div id="scorecontainer"></div>

<script>

    // Quiz Data
const quizData =  { 

    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"

  };






//render questions on page
document.getElementById("question1").innerHTML = quizData.question;
// document.getElementById("question2").innerHTML = quizData.question;
// document.getElementById("question3").innerHTML = quizData[2].question;

//  var score = 0;
//  score += 1; 
//  console.log(score);

// const container = document.getElementById("scorecontainer");

// const heading = document.createElement('h5');
// heading.textContent = `your score is ${score}`;
// container.appendChild(heading);



function checkAns() {
    // Get the question index from the clicked button
    //  let qIndex = parseInt(document.querySelector('input[name="ans1"]:checked').dataset.qIndex); //dataset.qIndex

    // Get the user's answer
    let userAns = document.querySelector('input[name="ans1"]:checked').value;
  console.log(userAns);
    // Check the answer
    if (userAns === quizData.correctAnswer) {
        alert("Correct!");

        var score = 0;
        score += 1;
        console.log(score);

        const container = document.getElementById("scorecontainer");

                    const heading = document.createElement('h5');
                    heading.textContent = `your score is ${score}`;
                    container.appendChild(heading);
        
    } else {
        alert(`Incorrect, the correct answer was ${quizData.correctAnswer}`);
       alert( " you are a murderer !!!");
    }
}

           
</script>

</body>
</html>

           



