
var len=document.querySelectorAll(".square").length;
var count=0;
document.addEventListener("keypress",function(){ 
var num=event.key;
if(num=='s')
{
    startgame()
}
});

function nextincrement(){
for(var i=1;i<4;i++)
   startgame();
}

var radom;
function startgame()
{
var radom=Math.round(Math.random()*3+1);
var value= ".r"+radom;
document.querySelector(value).classList.add("shadow");
setTimeout(function(){
    document.querySelector(value).classList.remove("shadow");
},100);
var val="r"+radom+" "+"square";
for(var i=0;i<len;i++)
{
document.querySelectorAll(".square")[i].addEventListener("click", function(){ 
    var nx= this.className;
    if(nx == val)
    {
      count++;
      console.log("sucessfull");
      setTimeout(function () {
        nextincrement();
      }, 1000);
      
    }
    else{
     console.log("try again");
    }
});
}
}



/*
if(typeof boxes=='button' && boxes!=null && 'addEventListner' in boxes){
    if(typeof box=='button'){
    alert("hello");
box.addEventListener("click",  function(){
    var nx= document.querySelectorAll(".square").className;
    myfunction(nx);
});
}
function myfunction(classn)
{
    console.log(val)
    console.log(classn)
    if(classn == val)
    {
      count++;
    }
    else{
        console.log("try again");
    
    }
}
if(count==n){
    document.querySelector("h1").textcontent="you passed level 1";
}*/
