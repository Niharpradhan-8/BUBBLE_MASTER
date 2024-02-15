
var timer = 60;
var timern = timer;
var score = 0;
var Tart = 0;
var nu = 0;

function newTarget(){
    Tart = Math.floor(Math.random() * 10);
    document.querySelector("#tgt").textContent = Tart;
}
function makebubble(){
    var count = "";
for(var i = 1; i <= 160 ; i++)
{
    var num = Math.floor(Math.random() * 10)
    count += `<div class="button">${num}</div>`

}
document.querySelector(".bottom").innerHTML = count;
}

function runTime(){
   var timerInt = setInterval(function(){
        if(timer>0)
        {
         timer--;
         document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".bottom").innerHTML = `<h1>YOUR SCORE : ${score}</h1> `
            timer = timern;

           score = 0;
           document.querySelector("#scorevalue").textContent = score;
        

        }
    },1000);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score ;
    
}

document.querySelector("#hit")
.addEventListener("click",function(dets){
  var  clickeedNumber = Number(dets.target.textContent);
  if(clickeedNumber === Tart)
  {
    increaseScore();
    newTarget();
    makebubble();
  }
})
makebubble();
runTime();
newTarget();


