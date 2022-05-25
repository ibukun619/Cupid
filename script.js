

document.getElementById("btn").addEventListener("click",clic);

function clic(){
  var namm=document.getElementById("nam").value.length == 0;
  var namm2=document.getElementById("nam2").value.length == 0;
  if(namm || namm2)
  {
      alert("No input given");
  }
  else{
var rand = (Math.floor(((Math.random())*100)))+1;
var sum =rand+"%";
alert("Match Calculated");

document.getElementById("pent").innerHTML=sum;

}
}
