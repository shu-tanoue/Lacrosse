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
    let hideBtn1 = document.getElementById('hidebtn1');
    let showBtn1 = document.getElementById('showbtn1');
    let hideBtn2 = document.getElementById('hidebtn2');
    let showBtn2 = document.getElementById('showbtn2');
    let hideBtn3 = document.getElementById('hidebtn3');
    let showBtn3 = document.getElementById('showbtn3');
    let hideBtn4 = document.getElementById('hidebtn4');
    let showBtn4 = document.getElementById('showbtn4');
    let hideBtn5 = document.getElementById('hidebtn5');
    let showBtn5 = document.getElementById('showbtn5');
    let hideBtn6 = document.getElementById('hidebtn6');
    let showBtn6 = document.getElementById('showbtn6');

    if(subbtn1.checked == true){
        submenu1.style.display = "block";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "2";
        hideBtn2.style.zIndex = "3";
        hideBtn3.style.zIndex = "3";
        hideBtn4.style.zIndex = "3";
        hideBtn5.style.zIndex = "3";
        hideBtn6.style.zIndex = "3";
        showBtn1.style.zIndex = "3";
        showBtn2.style.zIndex = "2";
        showBtn3.style.zIndex = "2";
        showBtn4.style.zIndex = "2";
        showBtn5.style.zIndex = "2";
        showBtn6.style.zIndex = "2";
    }else if(subbtn2.checked == true){
        subbtn1.checked=false;
        submenu1.style.display = "none";
        submenu2.style.display = "block";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "3";
        hideBtn2.style.zIndex = "2";
        hideBtn3.style.zIndex = "3";
        hideBtn4.style.zIndex = "3";
        hideBtn5.style.zIndex = "3";
        hideBtn6.style.zIndex = "3";
        showBtn1.style.zIndex = "2";
        showBtn2.style.zIndex = "3";
        showBtn3.style.zIndex = "2";
        showBtn4.style.zIndex = "2";
        showBtn5.style.zIndex = "2";
        showBtn6.style.zIndex = "2";
    }else if(subbtn3.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "block";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "3";
        hideBtn2.style.zIndex = "3";
        hideBtn3.style.zIndex = "2";
        hideBtn4.style.zIndex = "3";
        hideBtn5.style.zIndex = "3";
        hideBtn6.style.zIndex = "3";
        showBtn1.style.zIndex = "2";
        showBtn2.style.zIndex = "2";
        showBtn3.style.zIndex = "3";
        showBtn4.style.zIndex = "2";
        showBtn5.style.zIndex = "2";
        showBtn6.style.zIndex = "2";
    }else if(subbtn4.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "block";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "3";
        hideBtn2.style.zIndex = "3";
        hideBtn3.style.zIndex = "3";
        hideBtn4.style.zIndex = "2";
        hideBtn5.style.zIndex = "3";
        hideBtn6.style.zIndex = "3";
        showBtn1.style.zIndex = "2";
        showBtn2.style.zIndex = "2";
        showBtn3.style.zIndex = "2";
        showBtn4.style.zIndex = "3";
        showBtn5.style.zIndex = "2";
        showBtn6.style.zIndex = "2";
    }else if(subbtn5.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "block";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "3";
        hideBtn2.style.zIndex = "3";
        hideBtn3.style.zIndex = "3";
        hideBtn4.style.zIndex = "3";
        hideBtn5.style.zIndex = "2";
        hideBtn6.style.zIndex = "3";
        showBtn1.style.zIndex = "2";
        showBtn2.style.zIndex = "2";
        showBtn3.style.zIndex = "2";
        showBtn4.style.zIndex = "2";
        showBtn5.style.zIndex = "3";
        showBtn6.style.zIndex = "2";
    }else if(subbtn6.checked == true){
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "block";
        hideBtn1.style.zIndex = "3";
        hideBtn2.style.zIndex = "3";
        hideBtn3.style.zIndex = "3";
        hideBtn4.style.zIndex = "3";
        hideBtn5.style.zIndex = "3";
        hideBtn6.style.zIndex = "2";
        showBtn1.style.zIndex = "2";
        showBtn2.style.zIndex = "2";
        showBtn3.style.zIndex = "2";
        showBtn4.style.zIndex = "2";
        showBtn5.style.zIndex = "2";
        showBtn6.style.zIndex = "3";
    };
};

function radioDeselection() {
    let submenu1 = document.getElementById('submenu-1');
    let submenu2 = document.getElementById('submenu-2');
    let submenu3 = document.getElementById('submenu-3');
    let submenu4 = document.getElementById('submenu-4');
    let submenu5 = document.getElementById('submenu-5');
    let submenu6 = document.getElementById('submenu-6');
    let hideBtn1 = document.getElementById('hidebtn1');
    let showBtn1 = document.getElementById('showbtn1');
    let hideBtn2 = document.getElementById('hidebtn2');
    let showBtn2 = document.getElementById('showbtn2');
    let hideBtn3 = document.getElementById('hidebtn3');
    let showBtn3 = document.getElementById('showbtn3');
    let hideBtn4 = document.getElementById('hidebtn4');
    let showBtn4 = document.getElementById('showbtn4');
    let hideBtn5 = document.getElementById('hidebtn5');
    let showBtn5 = document.getElementById('showbtn5');
    let hideBtn6 = document.getElementById('hidebtn6');
    let showBtn6 = document.getElementById('showbtn6');
    for (const element of document.getElementsByName('subMenu')) {
        element.checked = false;
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
        hideBtn1.style.zIndex = "3";
        showBtn1.style.zIndex = "2";
        hideBtn2.style.zIndex = "3";
        showBtn2.style.zIndex = "2";
        hideBtn3.style.zIndex = "3";
        showBtn3.style.zIndex = "2";
        hideBtn4.style.zIndex = "3";
        showBtn4.style.zIndex = "2";
        hideBtn5.style.zIndex = "3";
        showBtn5.style.zIndex = "2";
        hideBtn6.style.zIndex = "3";
        showBtn6.style.zIndex = "2";
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