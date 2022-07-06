// "use stict";
// const shablon = {
//   brend: `Gucci`,
//   zakazol() {
//     console.log(`Zakaz qabul qilindi (brend nomi:${this.brend})`);
//   },
// };
// const shablon1 = {
//   brend: `Zara`,
//   zakazol() {
//     console.log(`Zakaz qabul qilindi ( brend nomi:${this.brend})`);
//   },
// };
// const shablon2 = {
//   brend: `Fendi`,
//   zakazol() {
//
//   },
// };
// shablon.zakazol.call(shablon1);
// shablon.zakazol.call(shablon2);
// shablon2.zakazol.call(shablon);

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const list = document.getElementById("list");
const btnDel = document.getElementById("btnDel");
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   list = btn.push;
//   document.getElementById(
//     "list"
//   ).innerHTML = `Zakaz qabul qilindi ( brend nomi: "Fendi")`;
// });

// btn2.addEventListener("click", (event) => {
//   event.preventDefault();
//   list = btn2.push;
//   document.getElementById(
//     "list"
//   ).innerHTML = `Zakaz qabul qilindi ( brend nomi: "Gucci")`;
// });

// btn3.addEventListener("click", (event) => {
//   event.preventDefault();
//   list = btn3.push;
//   document.getElementById(
//     "list"
//   ).innerHTML = `Zakaz qabul qilindi ( brend nomi: "Zara")`;
// });

btn.addEventListener("click", (event) => {
  event.preventDefault;
  const li = document.createElement("li");
  li.textContent = "Zakaz qabul qilindi: brend nomi: (Fendi)";
  list.append(li);
  btnDel.addEventListener("click", () => {
    li.remove("active");
  });
});

btn2.addEventListener("click", (event) => {
  event.preventDefault;
  const li = document.createElement("li");
  li.textContent = "Zakaz qabul qilindi: brend nomi: (Gucci)";
  list.append(li);
  btnDel.addEventListener("click", () => {
    li.remove("active");
  });
});

btn3.addEventListener("click", (event) => {
  event.preventDefault;
  const li = document.createElement("li");
  li.textContent = "Zakaz qabul qilindi: brend nomi: (Zara)";
  list.append(li);
  btnDel.addEventListener("click", () => {
    li.remove("active");
  });
});
