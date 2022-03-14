window.addEventListener('load', ()=>{
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerHeight;
//DESENHAR RETANGULOS

    // context.strokeStyle = "red";
    // context.lineWidth = 5;
    // context.strokeRect(400,400,100,100);

    // context.strokeStyle = "blue";
    // context.strokeRect(70,70,100,100);
    
    //DESENHAR LINHAS
    // context.beginPath();
    // context.moveTo(100, 100);
    // context.lineTo(200, 100);
    // context.stroke();

    let painting = false;
    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        context.beginPath;
    }
    function draw(e){
        if(!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();

        context.beginPath();
        context.moteTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
})