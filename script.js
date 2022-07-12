const draw_space = document.querySelector(".draw-space");
const pix64 = document.querySelector(".pixel64");
const pix32 = document.querySelector(".pixel32");
const pix16 = document.querySelector(".pixel16");
const pix8 = document.querySelector(".pixel8");
const clear = document.querySelector(".clear");
const color_picker1 = document.querySelector(".color1");
let width = '32';
let heigth = '32';
let selected_color = 'red';
draw_init();

pix64.addEventListener('click', () =>{
    width = '64';
    heigth = '64';
    draw_init();
});

pix32.addEventListener('click', () =>{
    width = '32';
    heigth = '32';
    draw_init();
});

pix16.addEventListener('click', () =>{
    width = '16';
    heigth = '16';
    draw_init();
});

pix8.addEventListener('click', () =>{
    width = '8';
    heigth = '8';
    draw_init();
});

clear.addEventListener('click', () => {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((b) => {
        if(b.style.backgroundColor){
            b.style.removeProperty("background-color");
        }
    })
})

color_picker1.addEventListener("change", (e) => {
    selected_color = e.target.value;
})

function draw_init() {
    while(draw_space.childNodes.length > 1){
        draw_space.removeChild(draw_space.lastChild)
    }
    
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
        b.style.backgroundColor = selected_color;
        })
    });

}


    

