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

btn.addEventListener("click", () => {
  console.log(`Zakaz qabul qilindi ( brend nomi:Fendi)`);
});

btn2.addEventListener("click", () => {
  console.log(`Zakaz qabul qilindi ( brend nomi:Gucci)`);
});

btn3.addEventListener("click", () => {
  console.log(`Zakaz qabul qilindi ( brend nomi: "Zara")`);
});
