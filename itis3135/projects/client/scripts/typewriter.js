const text = "Hi, my name is Deanna.";
const target = document.getElementById("hero-text");

let index = 0;

function typeWriter() {
    if (index >= text.length) return;

    target.textContent += text[index++];
    
    const delay = Math.random() * 50 + 40;

    setTimeout(typeWriter, delay);
}

window.addEventListener("load", typeWriter);