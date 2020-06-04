const img_box = ["./images/slideimg1_bw.png", "./images/slideimg2_bw.png", "./images/slideimg3_bw.png"];

let img_num = -1;

function slideShow() {
    if(img_num === 2){
        img_num = 0;
    }else{
        img_num++;
    }
    document.getElementById("slide_img").src = img_box[img_num];
}

setInterval(slideShow, 3000);