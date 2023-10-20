const questions = [
    {
      'que': 'What is the capital of France ?',
      'a':'Paris', 
      'b':'London', 
      'c':'Berlin',
      'd':'Madrid',
      'correct': 'a'
    },
    {
      'que': 'What is the largest planet in our solar system ?',
      'a':'Mars',
      'b':'Saturn',
      'c':'Jupiter',
      'd':'Neptune',
      'correct': 'Jupiter',
    },
    {
      'que': 'Which country won the FIFA World Cup in 2018 ?',
      'a': 'Brazil',
      'b':'Germany',
      'c':'France',
      'd':'Argentina',
      'correct': 'France'
    }
]
let index=0;
let total=questions.length;
let right=0, wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.options')
const loadQuestion = () =>{
  if(index==total){
     return endQuiz()
  }
  reset();
 const data = questions[index]
 quesBox.innerText=`${index+1})${data.que}`;
 optionInputs[0].nextElementSibling.innerText=data.a;
 optionInputs[1].nextElementSibling.innerText=data.b;
 optionInputs[2].nextElementSibling.innerText=data.c;
 optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () => {P
  const data=questions[index];
const ans=getAnswer()
if(ans=="Paris" || ans == "Jupiter" || ans == "France"){
  right+=1;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
  let answer;
    optionInputs.forEach(
        (input)=>{
          if(input.checked){
       answer = input.value;
          }
        }
    )
    return answer;
}
const reset=()=>{
  optionInputs.forEach(
    (input)=>{
      input.checked=false;
    }
  )
}
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`<h3>Thank you for playing the Quiz</h3>
  <h2>${right}/${total} are correct </h2>`
}
loadQuestion();
