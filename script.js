let images = [
    "url('./Images/background-1.jpg')",
    "url('./Images/background-2.jpg')",
    "url('./Images/background-3.jpg')",
    "url('./Images/background-4.jpg')",
    "url('./Images/background-5.jpg')",
    "url('./Images/background-6.jpg')",
    "url('./Images/background-7.jpg')",
    "url('./Images/background-8.jpg')"
];

let section = document.querySelector('#sectionId');



setInterval(function () {
    let bg = images[Math.floor(Math.random()* images.length)]
    section.style.backgroundImage = bg;
    console.log("hello");
    
},1000);


document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
    console.log("Btn work's");
  });