//section tournaments MODAL FUNCTION//
function BPZeroModal() {
    var modal0 = document.getElementById("jamboree-container");
    modal0.style.display = "block";
    var span0 = document.getElementById("ZeroSpan");
    span0.onclick = function () {
        modal0.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal0) {
            modal0.style.display = "none";
        }
    };
}





// section box-camp MODAL FUNCTIONS//


function BPFirstModal() {
    var modal1 = document.getElementById("box-springbreak");
    modal1.style.display = "block";
    var span1 = document.getElementById("FirstSpan");
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
    var modal2 = document.getElementById("box-summerbreak");
    modal2.style.display = "block";
    var span2 = document.getElementById("SecondSpan");
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
    var modal3 = document.getElementById("box-winterbreak");
    modal3.style.display = "block";
    var span3 = document.getElementById("ThirdSpan");
    span3.onclick = function () {
        modal3.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    };
}