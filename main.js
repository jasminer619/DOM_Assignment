// get all elements using id
document.querySelectorAll("id");
const pageHeader = document.getElementById("page-header");

 // change header text + bg color
var mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'New DOM Layout';
var header = document.getElementById('page-header');
header.classList.remove("bg-dark");
header.classList.add("bg-success");


 // adding to paragraphs
 var para = document.getElementsByTagName('p');
 console.log(para);
 
 var para1 = document.getElementById('para1');
 para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

 var para2 = document.getElementById('para2');
 para2.textContent = " The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

 // click event function
 var button = document.getElementById('btn');
 button.addEventListener("click", change_text);

 function change_text() {
 document.getElementById('para4').innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document." ;
 }

 //change boxes colors and classLists
var cards = document.getElementsByClassName('card-body');
console.log(cards);
console.log(cards[0]);

cards[0].classList.add("bg-danger");

cards[1].classList.add("bg-primary");

cards[2].classList.add("bg-warning");

cards[3].classList.add("bg-success");

cards[4].classList.add("bg-dark");

