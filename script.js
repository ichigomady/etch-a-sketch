const draw_space = document.querySelector(".draw-space");
let width = '32';
let heigth = '32';

for(let i = 1; i<= (512*512)/(width*heigth); i++){
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${heigth}px`;
    div.classList.add("block");
    div.classList.add(`${i}`);
    draw_space.appendChild(div);
}

const blocks = document.querySelectorAll(".block");
blocks.forEach((b) => {
    b.addEventListener('mouseover', () => {
        b.style.backgroundColor = 'red';
    })
})
