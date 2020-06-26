const url_string = window.location;
let url = new URL(url_string);
let option = url.searchParams.get("par");
document.getElementById(option).click();