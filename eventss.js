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
// let list=document.querySelector("select");
// list.addEventListener("change",function(dets){
//   console.log(dets.target.value)
// })

// let list=document.querySelector("select");
// let device = document.querySelector("#device");
// list.addEventListener("change", function(dets){
//   device.textContent = "device selected";
// });
// let device = document.querySelector("#device");
// list.addEventListener("change", function(dets){
//   device.textContent =`${dets.target.value} Selected`;
// });

//approach

// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//   if(dets.key===" "){
//   h1.textContent="SPC";
//   }else{
//     h1.textContent=dets.key;
//   }
// })

//select button..

// let btn = document.querySelector("#btn");
// let fileinput = document.querySelector("#fileinput");
// btn.addEventListener("click", function(){
//   fileinput.click();
// });
// fileinput.addEventListener("change",function(dets){
  // console.log(dets.target.files[0].name);
  // btn.textContent = dets.target.files[0].name;
//   const file=dets.target.files[0];
//   if(file){
//     btn.textContent=file.name;
//   }
// });

// Form..

// let form=document.querySelector("form");
// form.addEventListener("submit",function(dets){
//   dets.preventDefault();
//   console.log("form submitted");
// });


// show the form value..
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit", function(e){
//   e.preventDefault();

//   console.log(inputs[0].value);
//   console.log(inputs[1].value);
//   console.log(inputs[2].value);
//   console.log(inputs[3].value);
//   console.log(inputs[4].value);
// });

// create a card...
let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector("#main");

form.addEventListener("submit", function(e){
  e.preventDefault();

  // Card div
  let card=document.createElement("div");
  card.classList.add("card");

  // Profile div
  let profile=document.createElement("div");
  profile.classList.add("profile");

  // Image
  let img=document.createElement("img");
  img.setAttribute("src",inputs[0].value);

  // Name
  let h3=document.createElement("h3");
  h3.textContent=inputs[1].value;

  // Profession
  let h5=document.createElement("h5");
  h5.textContent=inputs[2].value;

  // Description
  let p=document.createElement("p");
  p.textContent=inputs[3].value;

  // Append elements
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  // Add card to main container
  main.appendChild(card);

  //empty for card
  inputs.forEach(function(input){
    if(input.type!=="submit"){
      input.value = "";
    }
  });
});


//mouse hover(in,out)
// let abcd=document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//   abcd.style.backgroundColor="yellow";
// });
// abcd.addEventListener("mouseout",function(){
//   abcd.style.backgroundColor="red";
// });

// mouse moves...
// let abcd=document.querySelector("#abcd");
// window.addEventListener("mousemove",function(dets){

//   abcd.style.top=dets.clientY+"px";
//   abcd.style.left=dets.clientX+"px";
// });

//Event object target,type,preventDefault..

// let abcd=document.querySelector("#abcd");
// window.addEventListener("click",function(dets){
//   console.log(dets);
// });
//target->(dets) these are a target..
//type->(click) these are a type.. 
//preventDefault->page refresh rokne ke liye use hota hai..


//Event bubbling and capturing..
// document.querySelector("#main").addEventListener("click",function(){
//   alert("clicked");
// });