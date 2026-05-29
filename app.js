function updateProgress(){
const f=[...document.querySelectorAll("input,textarea")];
document.querySelector(".global-fill").style.width=
(f.filter(x=>x.value.trim()).length/f.length*100)+"%";
}

document.addEventListener("input",updateProgress);
updateProgress();