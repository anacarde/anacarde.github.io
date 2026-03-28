document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("mail");

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    navigator.clipboard.writeText("lazare.monin@gmail.com").then(() => {
    copyMail.classList.add("copied");

    setTimeout(() => {
      copyMail.classList.remove("copied");
    }, 1600);
  });
});