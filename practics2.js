//Live Charactor counter...

// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// inp.addEventListener("input", function(){
//   span.textContent = inp.value.length;
// });

//20 se janda nhi likh skte..
let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input", function(){
  let left=20-inp.value.length;
  span.textContent =left;
  if(left<0){
    span.style.color="red";
  }
  else{
    span.style.color="green";
  }
});

