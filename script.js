document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("mail");

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    navigator.clipboard.writeText("lazare.monin@gmail.com");
    alert("Adresse copiée !");
  });
});