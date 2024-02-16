const textCode = document.getElementById("textcode");

const btnExit = document.getElementById("back-btn");

// HTML elementlarni tanlab olish

textCode.addEventListener("click", function (e) {
  e.preventDefault();
  // text.html sahifasiga o'tish
  window.location.href = "text.html";
});

btnExit.addEventListener("click", function (e) {
  console.log("Ishladi");
  // text.html sahifasiga o'tish
  window.location.href = "/index.html";
});
