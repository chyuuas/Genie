
document.getElementById("toggle-button").addEventListener("click", function () {
     const content = document.getElementById("toggle-content");
     const arrow = document.getElementById("toggle-arrow");

     if (content.style.display === "none" || content.style.display === "") {
         content.style.display = "block";
         arrow.textContent = "▲";
     } else {
         content.style.display = "none";
         arrow.textContent = "▼"; 
     }
 });

 document.getElementById("toggle-button1").addEventListener("click", function () {
     const content = document.getElementById("toggle-content1");
     const arrow = document.getElementById("toggle-arrow1");

     if (content.style.display === "none" || content.style.display === "") {
         content.style.display = "block";
         arrow.textContent = "▲";
     } else {
         content.style.display = "none";
         arrow.textContent = "▼"; 
     }
 });

 document.getElementById("toggle-button2").addEventListener("click", function () {
     const content = document.getElementById("toggle-content2");
     const arrow = document.getElementById("toggle-arrow2");

     if (content.style.display === "none" || content.style.display === "") {
         content.style.display = "block";
         arrow.textContent = "▲";
     } else {
         content.style.display = "none";
         arrow.textContent = "▼"; 
     }
 });

document.getElementById("toggle-button3").addEventListener("click", function () {
 const content = document.getElementById("toggle-content3");
 const arrow = document.getElementById("toggle-arrow3");

 if (content.style.display === "none" || content.style.display === "") {
     content.style.display = "block";
     arrow.textContent = "▲";
 } else {
     content.style.display = "none";
     arrow.textContent = "▼"; 
 }
});
