let slideIndex = 0;
showSlides();



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


function myFunction() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction1() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction2() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction3() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction4() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction5() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction6() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container")[7].style.backgroundColor = "rgb(210, 199, 199)";
}
function myFunction7() {
  document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[2].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[3].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[4].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[5].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[6].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container")[7].style.backgroundColor = "#d4a373";
}

function payment0() {
  document.getElementsByClassName("container-payment")[0].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container-payment")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container-payment")[2].style.backgroundColor = "rgb(210, 199, 199)";
}
function payment1() {
  document.getElementsByClassName("container-payment")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container-payment")[1].style.backgroundColor = "#d4a373";
  document.getElementsByClassName("container-payment")[2].style.backgroundColor = "rgb(210, 199, 199)";
}
function payment2() {
  document.getElementsByClassName("container-payment")[0].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container-payment")[1].style.backgroundColor = "rgb(210, 199, 199)";
  document.getElementsByClassName("container-payment")[2].style.backgroundColor = "#d4a373";
}

function check() {
  if (document.getElementById('regis-pw').value ==
    document.getElementById('regis-cpw').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Password Match';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = "Password Does'n Match";
  }
}

function check1() {
  if (document.getElementById('regis-pw').value !==
    document.getElementById('regis-cpw').value) {
      alert("password does'n match")
  }
}

function checkdate(){
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var output = month + "/" + day + "/" + year;
  var tanggal = document.getElementById("regis-dob").value;
  if (Date.parse(tanggal) > Date.parse(output)) {
      alert ("You cannot select a date later than today");
  }
}

function validationlogin(){
  var username = document.getElementById("form-username").value;
  var password = document.getElementById("form-pw").value;
  if (username != "" && password!="") {
    alert('Login Successful!');
  }else{
    alert('You Must Fill in The Data Completely!');
  }
} 

function validationsignup() {
    var cek = 0;
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var tanggal = document.getElementById("regis-dob").value;
    if (Date.parse(tanggal) > Date.parse(output)) {
        cek = 1;
    }
    if (cek == 0) {
      if (document.getElementById('regis-pw').value ==
      document.getElementById('regis-cpw').value) {
        alert("Register Successful! You Will Be Redirected To The Login Menu")
        window.location.href = "login.jsp";
      }else{
        alert("Password Does'n Match!")
      } 
      return false;
  } else {
        alert("You cannot select a date later than today")
      } 
  return false;
}

function validationtopupgenshin() {
  var ID = document.getElementById("name-id").value;
  var Nominal = document.getElementsByTagName("nominal").value;
  var payment = document.getElementsByTagName("payment").value;
  var email = document.getElementById("email").value;
  if (ID != "" && Nominal!="" && payment!="" && email!="") {
    alert('Top Up Successful!');
  }else{
    alert('You Must Fill in The Data Completely!');
  }
}

function validationtopupml() {
  var ID = document.getElementById("name-id").value;
  var Nominal = document.getElementsByTagName("nominal").value;
  var payment = document.getElementsByTagName("payment").value;
  var email = document.getElementById("email").value;
  if (ID != "" && Nominal!="" && payment!="" && email!="") {
    alert('Top Up Successful!');
  }else{
    alert('You Must Fill in The Data Completely!');
  }
}

function validationtopupPubg() {
  var ID = document.getElementById("name-id").value;
  var Nominal = document.getElementsByTagName("nominal").value;
  var payment = document.getElementsByTagName("payment").value;
  var email = document.getElementById("email").value;
  if (ID != "" && Nominal!="" && payment!="" && email!="") {
    alert('Top Up Successful!');
  }else{
    alert('You Must Fill in The Data Completely!');
  }
}

function validationtopupvalo() {
  var ID = document.getElementById("name-id").value;
  var Nominal = document.getElementsByTagName("nominal").value;
  var payment = document.getElementsByTagName("payment").value;
  var email = document.getElementById("email").value;
  if (ID != "" && Nominal!="" && payment!="" && email!="") {
    alert('Top Up Successful!');
  }else{
    alert('You Must Fill in The Data Completely!');
  }
}