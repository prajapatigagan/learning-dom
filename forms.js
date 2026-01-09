//forms..
//reading value from input,textarea,select...
//inline and js-based validation...

// let nm=document.querySelector("#name");
// let form=document.querySelector("#form");

// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
//   if(nm.value.length<=2){
//     document.querySelector("#hide").style.display="initial";
//   }else{
//     document.querySelector("#hide").style.display="none";
//   }
// });


//Pattern and custom regex(password and email velidation)
// let nm=document.querySelector("#name");
// let form=document.querySelector("#form");

// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
//   //email Pattern..
//   //  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //  let ans=regex.test("gagan@test.com");
  
//   //user name Pattern..
//   const regex = /^[0-9A-Za-z]{6,16}$/;
//   let ans=regex.test("Gagan123");
//    console.log(ans);
// });


//Question..
// Email,password validation..
let nm=document.querySelector("#name"); 
let formInput=document.querySelector("#form");
let emailInput=document.querySelector("#email");
let passwordInput=document.querySelector("#password");

form.addEventListener("submit",function(e){
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=\S+$).{8,}$/;

  const nameRegex=/^[a-zA-Z0-9_]{3,}$/;
 
  //input value..
  let email=emailInput.value.trim();
  let password=passwordInput.value.trim();
  let name=nm.value.trim();

  //validation
  let isEmailValid=emailRegex.test(email);
  let isPasswordValid=passwordRegex.test(password);
  let isNameValid=nameRegex.test(name);

    if(isEmailValid && isPasswordValid && isNameValid){
    console.log("Form Valid");
    } else {
    console.log("Form Invalid");
    if(!isNameValid){
      console.log("Invalid User Name");
    }
    if(!isEmailValid){
      console.log("Invelid Email Address");
    }
    if(!isPasswordValid){
      console.log("Incorrect Password");
    }
    }
});

