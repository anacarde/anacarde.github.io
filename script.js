document.addEventListener("DOMContentLoaded", function() {
   const btn = document.getElementById("mail");

   btn.addEventListener("click", function(e) {
   
      e.preventDefault();
      navigator.clipboard.writeText("lazare.monin@gmail.com").then(() => {
         
         btn.classList.add("copied");

         setTimeout(() => {
         btn.classList.remove("copied");
         }, 800);
      });
   });
});