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
    }else if(subbtn2.checked == true){
        submenu2.style.display = "block";
    }else if(subbtn3.checked == true){
        submenu3.style.display = "block";
    }else if(subbtn4.checked == true){
        submenu4.style.display = "block";
    }else if(subbtn5.checked == true){
        submenu5.style.display = "block";
    }else if(subbtn6.checked == true){
        submenu6.style.display = "block";
    }else{
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        submenu5.style.display = "none";
        submenu6.style.display = "none";
    };
};