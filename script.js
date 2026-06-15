JSCRIPT---------------!

// FAQ ACCORDION

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

if(answer.style.display === "block"){

answer.style.display = "none";

}
else{

document.querySelectorAll(".faq-answer")
.forEach(item => {

item.style.display = "none";

});

answer.style.display = "block";

}

});

});


// LOGIN FUNCTION

function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(email === "" || password === ""){

alert("Please enter Email and Password");

return;

}

localStorage.setItem("userEmail", email);

alert("Login Successful!");

window.location.href = "index.html";

}


// LOGOUT FUNCTION

function logout(){

localStorage.removeItem("userEmail");

alert("Logged Out Successfully");

window.location.href = "login.html";

}


// SUBSCRIPTION PLAN

function selectPlan(planName){

localStorage.setItem(
"selectedPlan",
planName
);

alert(
"You selected " +
planName +
" Plan"
);

}


// MOVIE SEARCH

function searchMovie(){

let input =
document.getElementById("searchInput")
.value
.toLowerCase();

let movies =
document.querySelectorAll(".movie-card");

movies.forEach(movie => {

let movieName =
movie.innerText.toLowerCase();

if(movieName.includes(input)){

movie.style.display = "block";

}
else{

movie.style.display = "none";

}

});

}


// CHECK LOGIN STATUS

window.onload = function(){

let user =
localStorage.getItem("userEmail");

if(user){

console.log(
"Logged In User: " + user
);

}

};


// EMAIL SUBSCRIPTION

function startMembership(){

let email =
document.getElementById("memberEmail")
.value;

if(email === ""){

alert("Enter Email Address");

return;

}

localStorage.setItem(
"memberEmail",
email
);

alert(
"Membership Started for: " +
email
);

}


// DEMO PLAY MOVIE

function playMovie(movieName){

alert(
"Now Playing: " +
movieName
);

}


// TRENDING MOVIE CLICK

const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

card.addEventListener("click", () => {

let movieTitle =
card.innerText;

playMovie(movieTitle);

});
