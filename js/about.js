function showContent() {
    let button1 = document.getElementById('date1');
    let content1 = document.getElementById('content1');
    let button2 = document.getElementById('date2');
    let content2 = document.getElementById('content2');
    let button3 = document.getElementById('date3');
    let content3 = document.getElementById('content3');
    let button4 = document.getElementById('date4');
    let content4 = document.getElementById('content4');

    if(button1.checked == true){
        content1.style.display = "flex";
        content2.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "none";
    }
    else if(button2.checked == true){
        content1.style.display = "none";
        content2.style.display = "flex";
        content3.style.display = "none";
        content4.style.display = "none";
    }
    else if(button3.checked == true){
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "flex";
        content4.style.display = "none";
    }
    else if(button4.checked == true){
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "flex";
    }
}

function nextContent() {
    var cont = 0;
    let btn1 = document.getElementById('date1');
    let btn2 = document.getElementById('date2');
    let btn3 = document.getElementById('date3');
    let btn4 = document.getElementById('date4');

    console.log(btn1);

    for (let i = 0; i >= cont; i++ ) {
        if (cont == 1) {
            btn1 = btn1.checked;
            cont += 1;
        } else if (cont == 2) {
            btn2 = btn2.checked;
            cont += 1;
        } else if (cont == 3) {
            btn3 = btn3.checked;
            cont += 1;
        } else if (cont == 4) {
            btn4 = btn4.checked;
        } 
    }
}



