let txt = document.querySelector("#text");
let btn = document.querySelector("#submitBtn");
txt.addEventListener(
  "Hover",
  () => (txt.style.cssText = "border-Color:red;borgder-Width:20px;")
);
btn.addEventListener("click", (event) => {
  console.log(txt.value);
  event.preventDefault();
});
