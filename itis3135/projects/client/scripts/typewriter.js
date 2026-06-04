const text = "I’m Deanna, a graphic designer who helps companies reimagine their identities and craft stories worth telling. ";
const target = document.getElementById("hero-text");

let index = 0;

function typeWriter() {
    if (index >= text.length) return;

    target.textContent += text[index++];
    
    const delay = Math.random() * 70 + 40;

    setTimeout(typeWriter, delay);
}

window.addEventListener("load", typeWriter);