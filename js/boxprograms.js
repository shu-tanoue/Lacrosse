function openPriceList(programName) {
    var i;
    var x = document.getElementsByClassName("priceListContent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(programName).style.display = "flex";
}



//MODAL FUNCTIONS


function BPFirstModal() {
    var modal1 = document.getElementById("boxMidget");
    modal1.style.display = "block";
    var span1 = document.getElementById("firstSpan");
    span1.onclick = function () {
        modal1.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    };
}

function BPSecondModal() {
    var modal2 = document.getElementById("boxBantam");
    modal2.style.display = "block";
    var span2 = document.getElementById("secondSpan");
    span2.onclick = function () {
        modal2.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    };
}

function BPThirdModal() {
    var modal3 = document.getElementById("boxPeeWee");
    modal3.style.display = "block";
    var span3 = document.getElementById("thirdSpan");
    span3.onclick = function () {
        modal3.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    };
}
