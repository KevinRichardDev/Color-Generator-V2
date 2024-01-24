function getColor() {
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

const color = `rgb(${r}, ${g}, ${b})`;

document.body.style.background = color;
content.classList.add("content")
content.innerHTML = `${color}`;

content.addEventListener("click", () =>{
  navigator.clipboard.writeText(color);
  content.innerHTML = "Copié !"
})

}

setInterval(getColor,2000)

