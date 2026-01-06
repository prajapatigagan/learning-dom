//what does get ElementByClass name return ?Is it an array

// let cl=document.getElementsByClassName("color");
// console.log(cl);


//use QuerySelectall to select all Buttons with class".buy now"

// let buy=document.querySelectorAll(".buy-now");
// console.log(buy);


//t1.select the heading of the page by id nd change its text to "welcome to Sheryians !".

// let heading = document.querySelector("#heading");
// heading.textContent = "welcome to Sheryians !";

//select All <li> elements and give print text using loop.

// let lis=document.querySelectorAll("li");
// lis.forEach(function(val){
//   console.log(val.textContent);
// });
// for(let i=0;i<lis.length;i++){
//   console.log(lis[i].textContent);
// };


//select a paragraph and replace  its Content with <b>update</b> by js.

//  let p=document.querySelector("p");
//  p.innerHTML="<b>update</b> java script";

 //how do you get the src of an image using js?
//  let img=document.querySelector("img");
// console.log(img.src);
// console.log(img.getAttribute("src"));


//select the link and update the hrf.
// let a1=document.querySelector("a");
// a1.href="https://www.google.com";

//add the highlight class to every even item in the list.
let li=document.querySelectorAll("ul li:nth-child(2n)");
// console.log(li);
li.forEach(function(elem){
  elem.classList.add("highlight");
});

