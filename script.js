function addNewWEField() {
  // console.log("Adding new field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  // console.log("Adding new field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generating CV
function generateCV() {
  // console.log("Generating CV");

  // name
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // github
  document.getElementById("ghT").innerHTML =
    document.getElementById("githubField").value;

  // linkedin
  document.getElementById("liT").innerHTML =
    document.getElementById("linkedinField").value;

  // instagram
  document.getElementById("instaT").innerHTML =
    document.getElementById("instagramField").value;

  // objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // academic qualification
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  // code for setting image
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // set the image to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

// print CV
function printCV() {
  const element=document.getElementById("cv-template");
  html2pdf()
  .from(element)
  .save();
}
