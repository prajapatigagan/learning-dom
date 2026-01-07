//events matlb hota hai browser pr koi action kiya jaye.

//events listener...
//single click..
// let h1=document.querySelector("h1");
// h1.addEventListener("click",function(){
//  h1.style.color="red"
// });

//double click..
// h1.addEventListener("dblclick",function(){
//   h1.style.color="green"
//  });

//remove event listener
// let h1=document.querySelector("h1");
// function dblclick(){
//   h1.style.color="pink";
// }
// h1.addEventListener("dblclick",dblclick);
// h1.removeEventListener("dblclick",dblclick);

//Comman events...

//input..
// let input=document.querySelector("input");
// input.addEventListener("input",function(){
//   console.log("typed");
// });
//how to type in input box dynamic..
// input.addEventListener("input",function(dets){
//   console.log(dets.data);
// });

// input.addEventListener("input",function(dets){
//   if(dets.data!==null){
//     console.log(dets.data);
//   }
// });

//change event...
let list=document.querySelector("select");
list.addEventListener("change",function(dets){
  console.log(dets.target.value)
})

// let list=document.querySelector("select");
// let device = document.querySelector("#device");
// list.addEventListener("change", function(dets){
//   device.textContent = "device selected";
// });
let device = document.querySelector("#device");
list.addEventListener("change", function(dets){
  device.textContent =`${dets.target.value} Selected`;
});
