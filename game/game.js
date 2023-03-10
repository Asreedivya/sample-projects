var i,count=0;
var nam;
var n=4;
for(i=1;i<=n;i++)
{
var radom=Math.round(Math.random()*3)+1;
var value= ".r"+radom;
document.querySelector(value).classList.add("shadow");
var val="r"+radom+" "+"square" ;
console.log("radom");

setTimeout(function(){
    document.querySelector(value).classList.remove("shadow");
},0500);
var nx= document.querySelectorAll(".square").className;
function myfunction(classname)
{  
    if(classname == val)
    {
      count++;
    }
    else{
     console.log("try again");
     i=n;
    }
}
}
console.log("count valus is"+count);
/*document.querySelectorAll(".square")[radom].onclick = function(){
    var classn=document.querySelectorAll(".r")[radom].getAttribute("this.classname"); 
console.log(classn);
}*/