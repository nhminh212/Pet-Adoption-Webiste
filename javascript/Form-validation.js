function validateForm() {
  var namex = document.forms["contactForm"]["name"].value;
  var namey = document.getElementsByClassName("hidden");
  var emailx = document.forms["contactForm"]["email"].value;
  var emaily = document.getElementsByClassName("hidden");
  var subjectx = document.forms["contactForm"]["subject"].value;
  var subjecty = document.getElementsByClassName("hidden");
  var commentx = document.forms["contactForm"]["comment"].value;
  var commenty = document.getElementsByClassName("hidden");
  if (namex == "") {
    namey.style.display = "block";
    return false;
  } else {
    namey.style.display = "none";
  }

  if (emailx == "") {
    emaily.style.display = "block";
    return false;
  } else {
    emaily.style.display = "none";
  }

  if (subjectx == "") {
    subjecty.style.display = "block";
    return false;
  } else {
    subjecty.style.display = "none";
  }

  if (commentx == "") {
    commenty.style.display = "block";
    return false;
  } else {
    commenty.style.display = "none";
  }

}

function mySubmit() {
  if (validateForm() == false) {
    return false;
  }
  else {
  var r = confirm("Do you want to send this message?");
  if (r == true) {
    alert("Your message has been sent");
  } else {
    return false;
  }
}
}
