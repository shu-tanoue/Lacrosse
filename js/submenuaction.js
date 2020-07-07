// recover URL
const url_string = window.location;  
// we create a object URL
let url = new URL(url_string);
// look for the parameter ("par")
let option = url.searchParams.get("par");
// simulate the click with the ID
document.getElementById(option).click();