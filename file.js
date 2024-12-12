var couter = document.querySelector(".cout")
const incrementbtn = document.querySelector(".increment")
const decrementbtn = document.querySelector(".decrements");
const pausebtn= document.querySelector(".pause")
let number=0
let incrementInterval;
let decrementInterval

incrementbtn.addEventListener("click", () => {
  if (incrementInterval) clearInterval(incrementInterval);
  incrementInterval=setInterval(() => {
      number++;
      couter.textContent = number;
      console.log(number++);
  },100)
})
pausebtn.addEventListener("click", () => {
  // Stop both increment and decrement intervals
  if (incrementInterval) clearInterval(incrementInterval);
  if (decrementInterval) clearInterval(decrementInterval);
})
decrementbtn.addEventListener("click", () => {
    if (decrementInterval) clearInterval(decrementInterval);
  decrementInterval=setInterval(() => {
    number--;
    couter.textContent = number;
    console.log(number--);
  }, 100);
});