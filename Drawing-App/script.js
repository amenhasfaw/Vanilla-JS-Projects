const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color");
const deleteBtn = document.getElementById("delete");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = colorPicker.value;
    ctx.fill();
}

canvas.addEventListener('mousemove',(e) => {
    if(isPressed){
        const X = e.offsetX
        const Y = e.offsetY
    
        drawCircle(X,Y)

    }
    
})

canvas.addEventListener('mousedown', () => {
    isPressed = true
})

canvas.addEventListener('mouseup', () => {
    isPressed = false
})

deleteBtn.addEventListener('click', () => {
    ctx.clearRect(0,0,400,400);
})

