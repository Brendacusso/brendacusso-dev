document.querySelector('.link-git').addEventListener('click', linkGit);
document.querySelector('.link-linkedin').addEventListener('click', linkLinkedin);
document.querySelector('.link-whats').addEventListener('click', linkWhats);
document.querySelector('.project1').addEventListener('click', project1);
document.querySelector('.light-dark-mode').addEventListener('click', changeLightMode);

function linkGit() {
    open("https://github.com/Brendacusso");
}

function linkLinkedin() {
    open("https://www.linkedin.com/in/brenda-cusso");
}

function linkWhats() {
    open("https://api.whatsapp.com/send/?phone=5547999105171&text&type=phone_number&app_absent=0");
}

function project1() {
    open("https://github.com/Brendacusso/news-homepage");
}

function changeLightMode() {
var mode = document.getElementById("mode");

    if(mode.getAttribute("mode") == "dark") {
        mode.setAttribute("mode", "light");

        document.getElementById("container").setAttribute("class", "container container-light");
        document.getElementById("project1").setAttribute("class", "project-item project-item-light link project1");
        document.getElementById("footer").setAttribute("class", "footer-light");
        document.getElementById("hr").setAttribute("class", "hr-light");
    } else {
        mode.setAttribute("mode", "dark");

        document.getElementById("container").setAttribute("class", "container container-dark");
        document.getElementById("project1").setAttribute("class", "project-item project-item-dark link project1");
        document.getElementById("footer").setAttribute("class", "footer-dark");
        document.getElementById("hr").setAttribute("class", "hr-dark");

    }
}