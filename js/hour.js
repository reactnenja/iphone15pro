let hour = document.getElementById("hour");

let minute = document.getElementById("minute");
let second = document.getElementById("second");
// Soatni yangilash funksiyasi
function updateClock() {
  // Hozirgi vaqtni olish

  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // Soat, minut va sekundlarni 2 xonali ko'rinishga keltirish
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);

  console.log(h);
  // HTML elementlarga qiymatlarini berish

  hour.textContent = h;

  minute.textContent = m;
}

// Har sekundda soatni yangilash
setInterval(updateClock, 1000);
