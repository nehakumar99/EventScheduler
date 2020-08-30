document.getElementsByClassName('openbtn')[0].addEventListener("click",sidebarOpen);
document.getElementsByClassName('closebtn')[0].addEventListener("click",sidebarClose);

function sidebarOpen(){
    document.getElementById('sidebar').style.width="30vw";
    document.getElementsByClassName('openbtn')[0].style.display = "none";
}

function sidebarClose(){
    document.getElementById('sidebar').style.width="0vw";
    document.getElementsByClassName('openbtn')[0].style.display = "block";
    document.getElementsByClassName('submenu')[0].style.display= "none";
}
