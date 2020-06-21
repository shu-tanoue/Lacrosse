/* ========== SHNYA ========== */

/* ########################## */

/* ########## menu ########## */

/* ########################## */

function showSubmenu(){
    let subbtn1 = document.getElementById('subbtn-1');
    let submenu1 = document.getElementById('submenu-1');
    let subbtn2 = document.getElementById('subbtn-2');
    let submenu2 = document.getElementById('submenu-2');
    let subbtn3 = document.getElementById('subbtn-3');
    let submenu3 = document.getElementById('submenu-3');
    let subbtn4 = document.getElementById('subbtn-4');
    let submenu4 = document.getElementById('submenu-4');
    let subbtn5 = document.getElementById('subbtn-5');
    let submenu5 = document.getElementById('submenu-5');
    let subbtn6 = document.getElementById('subbtn-6');
    let submenu6 = document.getElementById('submenu-6');

    if(subbtn1.checked == true){
        submenu1.style.display = "block";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    }else if(subbtn2.checked == true){
        subbtn1.checked=false;
        submenu1.style.display = "none";
        submenu2.style.display = "block";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    }else if(subbtn3.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "block";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    }else if(subbtn4.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "block";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    }else if(subbtn5.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "block";
        submenu6.style.display = "none";
    }else if(subbtn6.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "block";
    };
};

function radioDeselection() {
    let submenu1 = document.getElementById('submenu-1');
    let submenu2 = document.getElementById('submenu-2');
    let submenu3 = document.getElementById('submenu-3');
    let submenu4 = document.getElementById('submenu-4');
    let submenu5 = document.getElementById('submenu-5');
    let submenu6 = document.getElementById('submenu-6');
    for (const element of document.getElementsByName('subMenu')) {
        element.checked = false;
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    };
};

/* ################################### */

/* ########## hamburger-bar ########## */

/* ################################### */

$(function() {
    var backColor = $('#hamburger-bar');  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            backColor.css("background-color", "#89c64a");
        }else if ($(this).scrollTop() < 300) {
            backColor.css("background-color", "");
        }
    })
})