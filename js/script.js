function toggleTheme(){
document.body.classList.toggle("dark");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

function openDashboard(){
document.getElementById("dashboardModal").style.display="block";
}

function closeDashboard(){
document.getElementById("dashboardModal").style.display="none";
}
