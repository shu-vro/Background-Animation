const container = document.querySelector(".container");

for (let i = 0; i < 400; i++) {
    let transition = Math.random() * 5 + 3;
    let block = document.createElement("div");
    block.classList.add("block");
    block.setAttribute(
        "style",
        `
        animation-duration: ${transition}s;
        `
    );
    container.appendChild(block);
}
